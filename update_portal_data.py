import json
import csv
from datetime import datetime
import os
import re

def update_portal_data():
    courses_file = 'classroom_courses.csv'
    json_file = 'courses.json'
    sw_file = 'sw.js'
    
    # 1. Завантаження мапи користувачів (Google ID / Email -> ПІБ)
    users_map = {}
    user_files = ['users_gam.csv', 'users.csv', '../users.csv', '../workspace_users_audit.csv']

    for ufile in user_files:
        if os.path.exists(ufile):
            try:
                with open(ufile, mode='r', encoding='utf-8-sig') as f:
                    reader = csv.DictReader(f)
                    for row in reader:
                        uid = str(row.get('id', '')).strip()
                        email = str(row.get('primaryEmail', '') or row.get('email', '')).strip().lower()
                        
                        full_name = str(
                            row.get('name.fullName', '') or 
                            row.get('fullName', '') or 
                            row.get('ПІБ', '') or 
                            row.get('name', '')
                        ).strip()
                        
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

    # 2. Зчитування курсів та додавання ПІБ
    courses = []
    if os.path.exists(courses_file):
        with open(courses_file, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                owner_id = str(row.get('ownerId', '')).strip()
                teacher_name = users_map.get(owner_id, owner_id)
                
                row['teacher'] = teacher_name
                row['ownerName'] = teacher_name
                courses.append(row)

    now_iso = datetime.now().isoformat()
    version_stamp = datetime.now().strftime("%Y%m%d-%H%M%S")

    data = {
        "updatedAt": now_iso,
        "coursesCount": len(courses),
        "courses": courses
    }

    with open(json_file, mode='w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Зчитано {len(courses)} курсів із ПІБ викладачів у '{json_file}'")

    # 3. Авто-інвалідація кешу Service Worker
    if os.path.exists(sw_file):
        with open(sw_file, 'r', encoding='utf-8') as f:
            sw_content = f.read()
        
        new_sw_content = re.sub(
            r"(const\s+CACHE_NAME\s*=\s*['\"])[^'\"]+(['\"];)",
            rf"\g<1>classroom-cache-{version_stamp}\2",
            sw_content
        )
        
        with open(sw_file, 'w', encoding='utf-8') as f:
            f.write(new_sw_content)
        print(f"🔄 Service Worker (sw.js) оновлено до версії: classroom-cache-{version_stamp}")

if __name__ == '__main__':
    update_portal_data()
