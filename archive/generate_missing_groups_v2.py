import csv

domain = "schoolgus.ukr.education"

existing_emails = set()
with open("groups_export.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        if row.get("email"):
            existing_emails.add(row["email"].strip().lower())

commands = []

# 1. Загальношкільні зведені групи
summary_groups = [
    (f"all-teachers@{domain}", "Всі вчителі", "Загальна група для всіх педагогів"),
    (f"all-students@{domain}", "Всі учні", "Загальна група для всіх здобувачів освіти"),
    (f"students-1-4@{domain}", "Учні 1-4 класів", "Початкова школа (1-4 класи)"),
    (f"students-5-9@{domain}", "Учні 5-9 класів", "Середня школа (5-9 класи)"),
    (f"students-10-11@{domain}", "Учні 10-11 класів", "Старша школа (10-11 класи)")
]

for email, name, desc in summary_groups:
    if email not in existing_emails:
        commands.append(f'gam create group "{email}" name "{name}" description "{desc}"')

# 2. Групи Індивідуальної форми навчання (1–11 класи)
for g in range(1, 12):
    if_email = f"if-{g}@{domain}"
    if_name = f"Індивідуальне навчання {g} клас"
    if if_email not in existing_emails:
        commands.append(f'gam create group "{if_email}" name "{if_name}" description "Індивідуальна форма навчання (Педагогічний патронаж/Сімейна)"')

# 3. Підгрупи МОН для класів (1 та 2 групи з 4 предметів)
letters = [("a", "А"), ("b", "Б"), ("v", "В"), ("g", "Г")]
subjects = [
    ("ukr", "Українська мова"),
    ("eng", "Англійська мова"),
    ("info", "Інформатика"),
    ("tech", "Трудове навчання")
]

for g in range(1, 12):
    for l_code, l_ua in letters:
        for s_code, s_ua in subjects:
            for grp_num in [1, 2]:
                sub_email = f"class-{g}-{l_code}-{s_code}-g{grp_num}@{domain}"
                sub_name = f"{g}-{l_ua} клас {s_ua} ({grp_num} група)"
                if sub_email not in existing_emails:
                    commands.append(f'gam create group "{sub_email}" name "{sub_name}" description "Підгрупа МОН"')

with open("create_groups.sh", "w", encoding="utf-8") as f:
    f.write("#!/bin/bash\n")
    for cmd in commands:
        f.write(cmd + "\n")

print(f"Згенеровано нових команд для створення груп: {len(commands)}")
