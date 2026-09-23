import csv

domain = "schoolgus.ukr.education"

# 1. Зчитуємо користувачів та виводимо всі наявні підрозділи для діагностики
ou_set = set()
users = []

with open("users_export.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    print("Доступні колонки у CSV:", reader.fieldnames)
    for row in reader:
        # Підтримка різних варіантів назви колонки OU
        ou = row.get("orgUnitPath") or row.get("OrgUnitPath") or ""
        email = row.get("primaryEmail") or row.get("primaryemail") or ""
        ou = ou.strip()
        email = email.strip()
        
        if email and ou:
            ou_set.add(ou)
            users.append((email, ou))

print("\n--- Виявлені підрозділи (Org Units) у домені ---")
for ou in sorted(ou_set):
    print(f"  • {ou}")
print("--------------------------------------------------\n")

commands = []

for email, ou in users:
    ou_lower = ou.lower()
    
    # Фільтр вчителів (підтримує українські та англійські назви)
    if "вчител" in ou_lower or "teacher" in ou_lower or "педагог" in ou_lower:
        commands.append(f'gam group "all-teachers@{domain}" add member user "{email}"')
    
    # Фільтр учнів
    elif "учн" in ou_lower or "student" in ou_lower or "клас" in ou_lower or "екстернат" in ou_lower:
        commands.append(f'gam group "all-students@{domain}" add member user "{email}"')
        
        # Розподіл за ступенями (1-4, 5-9, 10-11)
        for g in range(1, 12):
            if f"/{g}-" in ou_lower or f" {g}-" in ou_lower or ou_lower.endswith(f"/{g}") or f"/{g} " in ou_lower:
                if 1 <= g <= 4:
                    commands.append(f'gam group "students-1-4@{domain}" add member user "{email}"')
                elif 5 <= g <= 9:
                    commands.append(f'gam group "students-5-9@{domain}" add member user "{email}"')
                elif 10 <= g <= 11:
                    commands.append(f'gam group "students-10-11@{domain}" add member user "{email}"')
                break

with open("add_members.sh", "w", encoding="utf-8") as f:
    f.write("#!/bin/bash\n")
    for cmd in commands:
        f.write(cmd + "\n")

print(f"Згенеровано команд для додавання користувачів: {len(commands)}")
