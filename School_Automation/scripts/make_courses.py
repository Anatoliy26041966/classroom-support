import csv
import os

output_path = os.path.expanduser('~/MyProject/School_Automation/create_courses_hybrid.csv')

# Класний керівник (власник) та група адміністрації
TEACHER_EMAIL = "martsinkovskiy@schoolgus.ukr.education"
ADMIN_GROUP = "admin_school@schoolgus.ukr.education"

# Нова гібридна структура для 1-А
courses_structure = [
    {"alias": "course-1-a-main", "name": "1-А клас. НУШ (2026-2027)", "owner": TEACHER_EMAIL},
    {"alias": "course-1-a-english-g1", "name": "1-А клас. Англійська мова (Група 1)", "owner": TEACHER_EMAIL},
    {"alias": "course-1-a-english-g2", "name": "1-А клас. Англійська мова (Група 2)", "owner": TEACHER_EMAIL}
]

with open(output_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['alias', 'name', 'owner', 'admin_group'])
    for course in courses_structure:
        writer.writerow([course['alias'], course['name'], course['owner'], ADMIN_GROUP])

print("✅ Нову гібридну конфігурацію успішно створено!")
