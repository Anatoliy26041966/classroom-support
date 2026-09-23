import csv
import re

domain = "schoolgus.ukr.education"
letter_map = {'а': 'a', 'a': 'a', 'б': 'b', 'b': 'b', 'в': 'v', 'v': 'v', 'г': 'g', 'g': 'g', 'д': 'd', 'd': 'd'}

# 1. Формуємо карту: group_email -> [список email учнів]
group_to_students = {}

with open("users_export.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        email = (row.get("primaryEmail") or "").strip()
        ou = (row.get("orgUnitPath") or "").strip()
        
        # Шукаємо клас у назві підрозділу (наприклад, "1-В клас")
        match = re.search(r'(\d+)-([а-яa-z])\s*клас', ou, re.IGNORECASE)
        if match:
            grade = int(match.group(1))
            letter = letter_map.get(match.group(2).lower(), match.group(2).lower())
            group_email = f"class-{grade}-{letter}@{domain}"
            
            if group_email not in group_to_students:
                group_to_students[group_email] = []
            group_to_students[group_email].append(email)

# 2. З'єднуємо курси з індивідуальними учнями
enrollments = []
with open("classroom_mapping.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        course_id = row.get("course_id")
        group_email = row.get("group_email")
        
        students = group_to_students.get(group_email, [])
        for student_email in students:
            enrollments.append({
                "course_id": course_id,
                "student_email": student_email
            })

# 3. Зберігаємо підсумковий файл
with open("direct_enrollment.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["course_id", "student_email"])
    writer.writeheader()
    writer.writerows(enrollments)

print(f"\n Згенеровано {len(enrollments)} індивідуальних записів для зарахування!")
