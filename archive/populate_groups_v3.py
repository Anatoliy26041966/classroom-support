import csv
import re

domain = "schoolgus.ukr.education"

letter_map = {
    'а': 'a', 'a': 'a',
    'б': 'b', 'b': 'b',
    'в': 'v', 'v': 'v',
    'г': 'g', 'g': 'g'
}

commands = set()

with open("users_export.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        ou = (row.get("orgUnitPath") or "").strip()
        email = (row.get("primaryEmail") or "").strip()

        if not email or not ou:
            continue

        ou_lower = ou.lower()

        # 1. Вчителі
        if "вчителі" in ou_lower or "teacher" in ou_lower:
            commands.add(f'gam group "all-teachers@{domain}" add member user "{email}"')
            continue

        # 2. Учні (Початкова, Середня, Старша, Екстернат)
        if any(x in ou_lower for x in ["початкова", "середня", "старша", "екстернатна"]):
            commands.add(f'gam group "all-students@{domain}" add member user "{email}"')

            # Стандартні класи (наприклад, "2-А клас", "10-Б клас")
            match_class = re.search(r'(\d+)-([а-яa-z])', ou, re.IGNORECASE)
            if match_class:
                grade = int(match_class.group(1))
                letter_char = match_class.group(2).lower()
                letter_code = letter_map.get(letter_char, letter_char)

                # Конкретна група класу
                class_group = f"class-{grade}-{letter_code}@{domain}"
                commands.add(f'gam group "{class_group}" add member user "{email}"')

                # Зведена група за ступенем
                if 1 <= grade <= 4:
                    commands.add(f'gam group "students-1-4@{domain}" add member user "{email}"')
                elif 5 <= grade <= 9:
                    commands.add(f'gam group "students-5-9@{domain}" add member user "{email}"')
                elif 10 <= grade <= 11:
                    commands.add(f'gam group "students-10-11@{domain}" add member user "{email}"')

            # Класи екстернату (наприклад, "03 клас", "10 клас")
            elif "екстернат" in ou_lower:
                match_ek = re.search(r'(\d+)\s*клас', ou, re.IGNORECASE)
                if match_ek:
                    grade = int(match_ek.group(1))
                    ek_group = f"externat-{grade}@{domain}"
                    commands.add(f'gam group "{ek_group}" add member user "{email}"')

                    if 1 <= grade <= 4:
                        commands.add(f'gam group "students-1-4@{domain}" add member user "{email}"')
                    elif 5 <= grade <= 9:
                        commands.add(f'gam group "students-5-9@{domain}" add member user "{email}"')
                    elif 10 <= grade <= 11:
                        commands.add(f'gam group "students-10-11@{domain}" add member user "{email}"')

with open("add_members.sh", "w", encoding="utf-8") as f:
    f.write("#!/bin/bash\n")
    for cmd in sorted(commands):
        f.write(cmd + "\n")

print(f"Успішно згенеровано унікальних команд додавання: {len(commands)}")
