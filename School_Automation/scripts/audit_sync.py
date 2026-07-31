import csv
import re

def guess_group_email(ou_path):
    # 1. Шукаємо ЕКСТЕРНАТ (наприклад: "/04. 🎒 ЕКСТЕРНАТНА ФОРМА НАВЧАННЯ/09 клас")
    if 'ЕКСТЕРНАТ' in ou_path.upper():
        # Шукаємо число після слешу, ігноруючи нуль (09 -> 9)
        match = re.search(r'/0?(\d+)\s*клас', ou_path, re.IGNORECASE)
        if match:
            grade = match.group(1)
            return f"externat-{grade}@schoolgus.ukr.education"
            
    # 2. Шукаємо ЗВИЧАЙНІ КЛАСИ (наприклад: "/02. 🧑‍🎓 СЕРЕДНЯ ШКОЛА/8-Б клас")
    else:
        match_class = re.search(r'(\d+)-([А-ЯІЇЄҐа-яіїєґ])\s*клас', ou_path, re.IGNORECASE)
        if match_class:
            grade = match_class.group(1)
            letter = match_class.group(2).lower()
            # Транслітерація
            translit = {'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g'}
            letter_eng = translit.get(letter, letter)
            return f"class-{grade}-{letter_eng}@schoolgus.ukr.education"
            
    return None

def main():
    print("⏳ Читаємо дані. Зачекайте...\n")
    
    ou_students = {}
    with open('users_list.csv', mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            email = row['primaryEmail']
            ou = row['orgUnitPath']
            
            expected_group = guess_group_email(ou)
            if expected_group:
                if expected_group not in ou_students:
                    ou_students[expected_group] = set()
                ou_students[expected_group].add(email)

    actual_group_members = {}
    with open('all_groups_members.csv', mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            group_email = row['group']
            member_email = row['email']
            
            if group_email not in actual_group_members:
                actual_group_members[group_email] = set()
            actual_group_members[group_email].add(member_email)

    print("=== ЗВІТ ПРО РОЗБІЖНОСТІ (OU vs Google Groups) ===\n")
    issues_found = False
    
    for group, expected_members in sorted(ou_students.items()):
        actual_members = actual_group_members.get(group, set())
        
        missing_in_group = expected_members - actual_members
        extra_in_group = actual_members - expected_members
        
        if missing_in_group or extra_in_group:
            issues_found = True
            print(f"⚠️ Проблема в класі/групі: {group}")
            if missing_in_group:
                print(f"   ❌ Забули додати в групу ({len(missing_in_group)} учнів): {', '.join(missing_in_group)}")
            if extra_in_group:
                print(f"   👻 Зайві в групі ({len(extra_in_group)} учнів): {', '.join(extra_in_group)}")
            print("-" * 60)
            
    if not issues_found:
        print("✅ Все ідеально! Склади всіх OU повністю співпадають з Google Групами.")

if __name__ == "__main__":
    main()