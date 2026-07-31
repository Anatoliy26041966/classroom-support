import csv

courses_by_teacher = {}

with open("FINAL_DONE.csv", mode="r", newline="", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        teacher_name = row["Teacher_Name"]
        course_name = row["name"]

        if teacher_name not in courses_by_teacher:
            courses_by_teacher[teacher_name] = []

        courses_by_teacher[teacher_name].append(course_name)

with open("teachers_report.txt", mode="w", newline="", encoding="utf-8") as txt_file:
    txt_file.write("🏫 ПОВНИЙ ЗВІТ ПО СТВОРЕНИХ КУРСАХ ВЧИТЕЛІВ\n")
    txt_file.write("=" * 50 + "\n\n")

    for teacher, courses in courses_by_teacher.items():
        print(f"\n👤 {teacher}:")
        txt_file.write(f"{teacher}:\n")

        for course in courses:
            print(f"   - {course}")
            txt_file.write(f"  - {course}\n")

        txt_file.write("\n")

print("\n🎉 Звіт успішно сформовано та збережено у файл 'teachers_report.txt'!")
