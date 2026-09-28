import csv, json, base64, os
from datetime import datetime

# Завантажуємо мапу користувачів (Google ID / Email -> ПІБ)
users_map = {}
user_files = ['users_gam.csv', '../users.csv']

for ufile in user_files:
    if os.path.exists(ufile):
        try:
            with open(ufile, mode='r', encoding='utf-8-sig') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    uid = str(row.get('id', '')).strip()
                    email = str(row.get('primaryEmail', '') or row.get('email', '')).strip().lower()
                    
                    # Формуємо ПІБ з полів GAM або таблиці
                    full_name = str(row.get('name.fullName', '') or row.get('fullName', '') or row.get('ПІБ', '') or row.get('name', '')).strip()
                    if not full_name:
                        given = str(row.get('name.givenName', '') or row.get('givenName', '')).strip()
                        family = str(row.get('name.familyName', '') or row.get('familyName', '')).strip()
                        full_name = f"{family} {given}".strip()
                    
                    if full_name:
                        if uid:
                            users_map[uid] = full_name
                        if email:
                            users_map[email] = full_name
        except Exception as e:
            print(f"Помилка читання {ufile}:", e)

courses = []
try:
    with open('courses_gam.csv', mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            course_id = str(row.get('id', '')).strip()
            name = str(row.get('name', '')).strip()
            owner_id = str(row.get('ownerId', '')).strip()
            
            if course_id and name:
                if course_id.isdigit():
                    b64_id = base64.b64encode(course_id.encode('utf-8')).decode('utf-8')
                else:
                    b64_id = course_id
                
                link = "https://classroom.google.com/c/" + b64_id
                
                # Підставляємо ПІБ замість ID
                teacher_name = users_map.get(owner_id, owner_id)
                
                courses.append({
                    "id": course_id,
                    "name": name,
                    "teacher": teacher_name,
                    "link": link
                })
except Exception as e:
    print("Error reading CSV:", e)

data = {
    "last_updated": datetime.now().strftime("%d.%m.%Y %H:%M"),
    "courses": courses
}

with open('courses.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Успішно оброблено {len(courses)} курсів із ПІБ викладачів.")
