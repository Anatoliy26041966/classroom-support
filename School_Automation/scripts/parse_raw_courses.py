import csv
import re

def clean_and_parse(text):
    parsed_courses = []
    lines = text.strip().split('\n')
    
    # Словник транслітерації для створення красивих alias в Google
    translit_map = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh', 
        'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 
        'n': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 
        'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya'
    }
    
    def to_alias(ukr_text):
        txt = ukr_text.lower()
        # Заміни для специфічних слів
        txt = txt.replace('англійська-мова', 'eng').replace('інформатика', 'inf')
        txt = txt.replace('фізична-культура', 'fizra').replace('екстернат', 'ext')
        txt = txt.replace('гр-', 'gr').replace('група-', 'gr')
        
        res = ""
        for char in txt:
            res += translit_map.get(char, char)
        res = re.sub(r'[^a-z0-9-]', '', res)
        return re.sub(r'-+', '-', res).strip('-')

    for line in lines:
        line = line.strip()
        # Ігноруємо пусті рядки, технічні позначки "Середня школа", "Початкова школа" та поодинокі цифри 1 чи 0
        if not line or line.isdigit() or line.startswith("Середня школа") or line.startswith("Початкова школа") or line.startswith("Екстернат") or line.startswith("На перевірку"):
            continue
            
        # Очищаємо індекси завучів на початку ("11. ", "04. " тощо)
        clean_line = re.sub(r'^\d+\.\s*', '', line)
        
        # Визначаємо паралель
        grade_match = re.search(r'^(\d+)', clean_line)
        grade = grade_match.group(1) if grade_match else ""
        
        # Визначаємо повну назву класу (напр. 11-Б або 4-А, або просто 11 для екстернату)
        class_match = re.search(r'^(\d+-?[А-ЯІЇЄҐа-яіїєґ]?)', clean_line)
        class_name = class_match.group(1) if class_match else grade
        
        # Відокремлюємо предмет
        subject_part = clean_line
        subject_part = re.sub(r'^\d+-?[А-ЯІЇЄҐа-яіїєґ]?\s*(клас\.)?\s*', '', subject_part)
        subject_part = re.sub(r'\s*\(2026-2027\).*', '', subject_part)
        subject_part = subject_part.strip('. ')
        
        # Визначаємо підгрупу
        subgroup = "Весь клас"
        if "Гр." in subject_part or "Група" in subject_part:
            group_match = re.search(r'\((Гр\.\s*\d+|Група\s*\d+|Гр\s*\d+)\)', subject_part)
            if group_match:
                subgroup = group_match.group(1)
        
        # Формуємо Єдиний Стандарт назви курсу
        is_externat = "екстернат" in clean_line.lower()
        if is_externat:
            standard_name = f"{int(grade)} клас. Екстернат (2026-2027)"
            alias = f"c-{int(grade)}-ext"
        else:
            # Прибираємо (Гр. X) з назви самого предмету, бо воно буде в кінці назви курсу за стандартом
            clean_subject = re.sub(r'\s*\((Гр\.\s*\d+|Група\s*\d+|Гр\s*\d+)\)', '', subject_part).strip()
            if subgroup != "Весь клас":
                standard_name = f"{class_name} клас. {clean_subject} ({subgroup}) (2026-2027)"
                alias_subj = to_alias(f"{clean_subject}-{subgroup}")
            else:
                standard_name = f"{class_name} клас. {clean_subject} (2026-2027)"
                alias_subj = to_alias(clean_subject)
                
            alias = f"c-{class_name.lower()}-{alias_subj}"
            
        parsed_courses.append([
            grade, class_name, subject_part, subgroup, "", "", standard_name, alias
        ])
        
    return parsed_courses

try:
    with open('raw_courses.txt', 'r', encoding='utf-8') as f:
        file_content = f.read()
except FileNotFoundError:
    print("❌ Помилка: Спершу створіть файл raw_courses.txt та скопіюйте туди список класів!")
    exit()

courses = clean_and_parse(file_content)

# Записуємо все у підготовлений CSV-файл
with open('courses_template.csv', mode='w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Parallel', 'Class', 'Subject', 'Subgroup', 'Teacher_Name', 'Teacher_Email', 'Standard_Name', 'Alias'])
    writer.writerows(courses)

print(f"✅ Успішно оброблено {len(courses)} курсів та збережено в 'courses_template.csv'!")