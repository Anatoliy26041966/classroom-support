import csv
import subprocess

domain = "schoolgus.ukr.education"

# 1. Експорт поточного списку користувачів через stdout
print("Експорт списку користувачів з Google Workspace...")
with open("users_export.csv", "w", encoding="utf-8") as f_out:
    subprocess.run(["gam", "print", "users", "fields", "primaryEmail,orgUnitPath"], stdout=f_out, check=True)

commands = []

with open("users_export.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        email = row.get("primaryEmail", "").strip()
        ou = row.get("orgUnitPath", "").strip()
        
        if not email or not ou:
            continue

        # Вчителі
        if "/Вчителі" in ou or ou == "/Teachers":
            commands.append(f'gam group "all-teachers@{domain}" add member user "{email}"')
        
        # Учні (автоматичний розподіл за ОП)
        elif "/Учні" in ou or ou.startswith("/Students"):
            commands.append(f'gam group "all-students@{domain}" add member user "{email}"')
            
            # Визначення паралелі за назвою підрозділу
            for g in range(1, 12):
                if f"/{g}-" in ou or ou.endswith(f"/{g}"):
                    if 1 <= g <= 4:
                        commands.append(f'gam group "students-1-4@{domain}" add member user "{email}"')
                    elif 5 <= g <= 9:
                        commands.append(f'gam group "students-5-9@{domain}" add member user "{email}"')
                    elif 10 <= g <= 11:
                        commands.append(f'gam group "students-10-11@{domain}" add member user "{email}"')

with open("add_members.sh", "w", encoding="utf-8") as f:
    f.write("#!/bin/bash\n")
    for cmd in commands:
        f.write(cmd + "\n")

print(f"Згенеровано команд для додавання користувачів: {len(commands)}")
