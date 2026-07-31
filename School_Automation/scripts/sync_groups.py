import csv
import os
import re

# Шляхи до файлів
users_backup = os.path.expanduser('~/MyProject/School_Automation/Backups/Backup_2026_06_07/2026_06_07_all_users.csv')
groups_backup = os.path.expanduser('~/MyProject/School_Automation/Backups/Backup_2026_06_07/2026_06_07_all_groups_members_detailed.csv')

add_output = os.path.expanduser('~/MyProject/School_Automation/groups_add_members.csv')
remove_output = os.path.expanduser('~/MyProject/School_Automation/groups_remove_members.csv')

DOMAIN = "schoolgus.ukr.education"

def get_group_email_from_ou(ou_path):
    if not ou_path: return None
    
    # Регулярний вираз підтримує великі та малі літери
    match = re.search(r'/(\d+)-([А-ЯІЄЇҐа-яієїґ])\s+клас', ou_path)
    if match:
        grade, letter = match.group(1), match.group(2).lower()
        translit = {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya'}
        letter_en = translit.get(letter, letter)
        return f"class-{grade}-{letter_en}@{DOMAIN}"
        
    match_ext = re.search(r'/04\..*/(\d+)\s+клас', ou_path)
    if match_ext:
        grade = int(match_ext.group(1))
        return f"externat-{grade}@{DOMAIN}"
        
    return None

# Читаємо користувачів з ОП
expected_group_members = {}
total_users_in_ou = 0

with open(users_backup, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        email = row.get('primaryEmail')
        ou = row.get('orgUnitPath')
        if email and ou:
            group_email = get_group_email_from_ou(ou)
            if group_email:
                if group_email not in expected_group_members:
                    expected_group_members[group_email] = set()
                expected_group_members[group_email].add(email)
                total_users_in_ou += 1

# Читаємо поточні групи
current_group_members = {}
total_members_in_groups = 0

if os.path.exists(groups_backup):
    with open(groups_backup, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            group_email = row.get('group')
            member_email = row.get('email')
            role = row.get('role', 'MEMBER')
            
            if group_email and member_email and role == 'MEMBER':
                if group_email not in current_group_members:
                    current_group_members[group_email] = set()
                current_group_members[group_email].add(member_email)
                total_members_in_groups += 1

changes_to_add = []
changes_to_remove = []

for group_email, expected_users in expected_group_members.items():
    current_users = current_group_members.get(group_email, set())
    
    for user in expected_users:
        if user not in current_users:
            changes_to_add.append([group_email, user])
            
    for user in current_users:
        if user not in expected_users:
            # Не чіпаємо адмінів та вчителів
            if not group_email.startswith('admin_') and not group_email.startswith('vchyteli'):
                changes_to_remove.append([group_email, user])

with open(add_output, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['group', 'user'])
    writer.writerows(changes_to_add)

with open(remove_output, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['group', 'user'])
    writer.writerows(changes_to_remove)

print(f"📊 Результати аналізу синхронізації груп:")
print(f"➕ Потрібно додати до груп: {len(changes_to_add)} учнів")
print(f"❌ Потрібно видалити з груп: {len(changes_to_remove)} користувачів")
print(f"--------------------------------------------------")
print(f"🔍 ДІАГНОСТИКА БАЗИ ДАНИХ:")
print(f"   1. Знайдено учнів у підрозділах (ОП): {total_users_in_ou}")
print(f"   2. Знайдено учасників у Google-групах: {total_members_in_groups}")
print(f"🚀 Скрипт успішно виконав роботу!")