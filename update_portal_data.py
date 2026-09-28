import json
import csv
from datetime import datetime
import os
import re

def update_portal_data():
    courses_file = 'classroom_courses.csv'
    json_file = 'courses.json'
    sw_file = 'sw.js'
    courses = []

    if os.path.exists(courses_file):
        with open(courses_file, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
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

    print(f"Zchytano {len(courses)} kursiv z '{json_file}'")
    print(f"OK: Fayl '{json_file}' uspeshno onovleno!")
    print(f"Mitka chasu: {now_iso}")

    # Авто-інвалідація кешу Service Worker
    if os.path.exists(sw_file):
        with open(sw_file, 'r', encoding='utf-8') as f:
            sw_content = f.read()
        
        # Заміна версії кешу на нову мітку часу
        new_sw_content = re.sub(
            r"(const\s+CACHE_NAME\s*=\s*['\"])[^'\"]+(['\"];)",
            rf"\g<1>classroom-cache-{version_stamp}\2",
            sw_content
        )
        
        with open(sw_file, 'w', encoding='utf-8') as f:
            f.write(new_sw_content)
        print(f"🔄 Service Worker (sw.js) оновлено до версії кешу: classroom-cache-{version_stamp}")

if __name__ == '__main__':
    update_portal_data()
