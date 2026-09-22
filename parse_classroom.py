import csv

with open("classroom_courses.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    print("\n--- Доступні колонки у CSV курсів ---")
    print(reader.fieldnames)
    
    print("\n--- Зразок перших 10 курсів (Назва / Секція / Власник) ---")
    for i, row in enumerate(reader):
        if i >= 10:
            break
        name = row.get("name", "N/A")
        section = row.get("section", "N/A")
        owner = row.get("ownerId", row.get("teacherGroupEmail", "N/A"))
        print(f" • [{row.get('id', 'N/A')}] {name} | Секція: {section} | Власник: {owner}")
