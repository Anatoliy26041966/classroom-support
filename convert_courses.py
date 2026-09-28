import csv, json, base64
from datetime import datetime

courses = []
try:
    with open('courses_gam.csv', mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            course_id = str(row.get('id', '')).strip()
            name = str(row.get('name', '')).strip()
            owner = str(row.get('ownerId', '')).strip()
            
            if course_id and name:
                if course_id.isdigit():
                    b64_id = base64.b64encode(course_id.encode('utf-8')).decode('utf-8')
                else:
                    b64_id = course_id
                
                link = "https://classroom.google.com/c/" + b64_id
                
                courses.append({
                    "id": course_id,
                    "name": name,
                    "teacher": owner,
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

print("Processed " + str(len(courses)) + " courses.")
