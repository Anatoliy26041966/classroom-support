import json
import csv
from datetime import datetime
import os
import re
from urllib.parse import urlsplit

def update_portal_data():
    courses_file = 'classroom_courses.csv'
    json_file = 'courses.json'
    sw_file = 'sw.js'

    if not os.path.isfile(courses_file):
        raise FileNotFoundError(f"Course source not found: {courses_file}")

    courses = []
    seen_ids = set()
    seen_links = set()
    with open(courses_file, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row_number, row in enumerate(reader, start=2):
            status = str(row.get('courseState') or '').strip().upper()
            if status != 'ACTIVE':
                continue

            course_id = str(row.get('id') or '').strip()
            name = str(row.get('name') or '').strip()
            section = str(row.get('section') or '').strip()
            link = str(row.get('link') or '').strip()
            parsed_link = urlsplit(link)

            if not course_id or not name:
                raise ValueError(f"Missing course ID or name on CSV row {row_number}")
            if (
                parsed_link.scheme != 'https'
                or parsed_link.netloc != 'classroom.google.com'
                or not parsed_link.path.startswith('/c/')
            ):
                raise ValueError(f"Invalid Classroom link on CSV row {row_number}")
            if course_id in seen_ids or link in seen_links:
                raise ValueError(f"Duplicate course ID or link on CSV row {row_number}")

            seen_ids.add(course_id)
            seen_links.add(link)
            courses.append({
                'id': course_id,
                'name': name,
                'section': section,
                'courseState': status,
                'link': link,
            })

    if not courses:
        raise ValueError("No active Classroom courses found")

    now_iso = datetime.now().astimezone().isoformat(timespec='seconds')
    version_stamp = datetime.now().strftime("%Y%m%d-%H%M%S")

    data = {
        "updatedAt": now_iso,
        "last_updated": now_iso,
        "coursesCount": len(courses),
        "courses": courses
    }

    with open(json_file, mode='w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Зчитано {len(courses)} активних курсів у '{json_file}'")

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
