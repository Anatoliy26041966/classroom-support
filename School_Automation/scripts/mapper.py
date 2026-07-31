import csv
import re
import os

# Точний шлях до нашого надійного бекапу користувачів
input_path = os.path.expanduser('~/MyProject/School_Automation/Backups/Backup_2026_06_07/2026_06_07_all_users.csv')
# Файл результату ляже в цю ж папку School_Automation
output_path = os.path.expanduser('~/MyProject/School_Automation/update_all.csv')

def get_new_org(old_org):
    if not isinstance(old_org, str): return None
    
    # Регулярний вираз під старий формат (наприклад: "/учні/8 А клас")
    m1 = re.match(r'/учні/(\d+)\s+([А-ЯІЄЇҐа-яієїґ])\s+клас', old_org)
    if m1:
        g, l = int(m1.group(1)), m1.group(2).upper()
        # Мапимо чітко на вашу нову структуру в Google з нулями та емодзі 👨‍🎓
        if 1 <= g <= 4: return f"/01. 👶 ПОЧАТКОВА ШКОЛА/{g}-{l} клас"
        if 5 <= g <= 9: return f"/02. 👨‍🎓 СЕРЕДНЯ ШКОЛА/{g}-{l} клас"
        if 10 <= g <= 11: return f"/03. 🎓 СТАРША ШКОЛА/{g}-{l} клас"
        
    # Формат для екстернату
    m2 = re.match(r'/учні/(\d+)\s+клас\s+екстернат', old_org)
    if m2:
        return f"/04. 🎒 ЕКСТЕРНАТНА ФОРМА НАВЧАННЯ/{int(m2.group(1)):02d} клас"
        
    return None

with open(input_path, 'r', encoding='utf-8') as fin, open(output_path, 'w', encoding='utf-8', newline='') as fout:
    reader = csv.DictReader(fin)
    writer = csv.writer(fout)
    
    # Формуємо заголовки для GAM
    writer.writerow(['primaryEmail', 'orgUnitPath'])
    
    count = 0
    for row in reader:
        current_org = row.get('orgUnitPath', '')
        new_org = get_new_org(current_org)
        
        # Записуємо лише тих учнів, у яких новий підрозділ відрізняється від поточного
        if new_org and new_org != current_org:
            writer.writerow([row['primaryEmail'], new_org])
            count += 1
            
print(f"✅ Магія спрацювала! Новий файл update_all.csv успішно згенеровано.")
print(f"✅ Знайдено {count} учнів, готових до автоматичного перенесення.")