import csv
import os

output_courses = os.path.expanduser('~/MyProject/School_Automation/create_all_1_classes.csv')
output_topics = os.path.expanduser('~/MyProject/School_Automation/create_all_1_topics.csv')

TEACHER_EMAIL = "martsinkovskiy@schoolgus.ukr.education"
ADMIN_GROUP = "admin_school@schoolgus.ukr.education"

# Решта перших класів у школі
other_classes = ["Б", "В"]

subjects = [
    "Оголошення та виховна робота",
    "Українська мова",
    "Математика",
    "Я досліджую світ",
    "Мистецтво",
    "Фізична культура"
]

course_rows = []
topic_rows = []

for letter in other_classes:
    lower_letter = letter.lower()
    
    # Головний курс
    main_alias = f"course-1-{lower_letter}-main"
    main_name = f"1-{letter} клас. НУШ (2026-2027)"
    course_rows.append([main_alias, main_name, TEACHER_EMAIL, ADMIN_GROUP])
    
    # Теми-предмети
    for subject in subjects:
        topic_rows.append([main_alias, subject])
        
    # Англійська мова по групах
    course_rows.append([f"course-1-{lower_letter}-english-g1", f"1-{letter} клас. Англійська мова (Група 1)", TEACHER_EMAIL, ADMIN_GROUP])
    course_rows.append([f"course-1-{lower_letter}-english-g2", f"1-{letter} клас. Англійська мова (Група 2)", TEACHER_EMAIL, ADMIN_GROUP])

with open(output_courses, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['alias', 'name', 'owner', 'admin_group'])
    writer.writerows(course_rows)

with open(output_topics, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['course_alias', 'topic_name'])
    writer.writerows(topic_rows)

print("✅ Конфігурацію для 1-Б та 1-В успішно створено!")
