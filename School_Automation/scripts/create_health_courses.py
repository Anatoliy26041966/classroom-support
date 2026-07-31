import subprocess

# Повний шлях до GAM та ваш email
GAM_BIN = "/Users/anatoliy/bin/gamadv-xtd3/gam"
TEACHER_EMAIL = "martsinkovskiy@schoolgus.ukr.education"

courses = [
    "05. 5-Б клас. Здоров'я, безпека та добробут",
    "05. 5-В клас. Здоров'я, безпека та добробут",
    "05. 5-Г клас. Здоров'я, безпека та добробут",
]

section_name = "Середня школа"

for course_name in courses:
    print(f"Створення курсу: {course_name}...")
    command = f'{GAM_BIN} create course name "{course_name}" section "{section_name}" teacher "{TEACHER_EMAIL}" status ACTIVE'

    result = subprocess.run(command, shell=True, capture_output=True, text=True)

    if result.returncode == 0:
        print("✅ Успішно створено!")
        print(result.stdout)
    else:
        print(f"❌ Помилка: {result.stderr}")