import csv

input_file = 'courses_list.csv'
output_file = 'rename_courses.csv'

with open(input_file, mode='r', encoding='utf-8') as infile, \
     open(output_file, mode='w', encoding='utf-8', newline='') as outfile:
    reader = csv.DictReader(infile)
    writer = csv.writer(outfile)
    writer.writerow(['course_id', 'new_name'])

    for row in reader:
        name = row.get('name', '')
        course_id = row.get('id', '')

        if 'Екстернат' in name or 'екстернат' in name:
            class_num = name.split('.')[0].strip() if '.' in name else ''
            if class_num.isdigit():
                new_title = f"{int(class_num)} клас. Індивідуальна ФН (Екстернат, Сімейна, Педпатронаж) (2026-2027)"
            else:
                new_title = "Індивідуальна ФН (Екстернат, Сімейна, Педпатронаж) (2026-2027)"

            writer.writerow([course_id, new_title])

print("Файл rename_courses.csv оновлено з новими назвами.")
