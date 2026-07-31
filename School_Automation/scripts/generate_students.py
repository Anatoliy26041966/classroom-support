import csv, re, sys

sys.stdout.reconfigure(encoding='utf-8')

USERS_FILE = '/Users/anatoliy/MyProject/School_Automation/workspace_users.csv'
COURSES_FILE = '/Users/anatoliy/MyProject/School_Automation/courses_template.csv'
OUTPUT_FILE = '/Users/anatoliy/MyProject/School_Automation/students_to_courses.csv'

student_classes = {} # email -> нормалізований клас для пошуку

with open(USERS_FILE, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        email = row['primaryEmail'].strip().lower()
        org_path = row['orgUnitPath'].strip()
        
        # 1. Якщо це ЕКСТЕРНАТ
        if "ЕКСТЕРНАТНА" in org_path:
            match_ext = re.search(r'(\d+)\s*клас', org_path)
            if match_ext:
                digit = match_ext.group(1).strip() # витягує наприклад "03" або "11"
                # Робимо відповідність до твого файлу: якщо цифра < 5, лишаємо з нулем, якщо >= 5 — прибираємо нуль
                val = int(digit)
                if val < 5:
                    student_classes[email] = f"{val:02d}" # "01", "02", "03", "04"
                else:
                    student_classes[email] = str(val)    # "5", "6", "7", "8", "9", "10", "11"
                continue

        # 2. Якщо це звичайний клас (наприклад, "11-Б клас")
        match_reg = re.search(r'(\d+-[А-ЯІЇЄҐа-яіїєґ])\s*клас', org_path)
        if match_reg:
            student_classes[email] = match_reg.group(1).strip()

# Зчитуємо курси
class_courses = {} 
with open(COURSES_FILE, mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        course_class = row['Class'].strip()
        alias = row['Alias'].strip()
        if course_class and alias:
            if course_class not in class_courses:
                class_courses[course_class] = []
            class_courses[course_class].append(alias)

# Зв'язуємо учнів
output_rows = []
for email, clean_class in student_classes.items():
    if clean_class in class_courses:
        for alias in class_courses[clean_class]:
            output_rows.append({'Course_Alias': alias, 'Student_Email': email})

# Записуємо результат
with open(OUTPUT_FILE, mode='w', encoding='utf-8', newline='') as f:
    fieldnames = ['Course_Alias', 'Student_Email']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(output_rows)

print('\n🎉 Генерація списків учнів (включаючи Екстернат) завершена успішно!')
print(f'🧑‍🎓 Всього знайдено та класифіковано учнів: {len(student_classes)}')
print(f'📚 Згенеровано зв\'язків "Учень-Курс" для GAM: {len(output_rows)}')
print(f'📁 Файл збережено: {OUTPUT_FILE}')
