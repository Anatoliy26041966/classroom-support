import csv, re, sys

sys.stdout.reconfigure(encoding='utf-8')

COURSES_FILE = '/Users/anatoliy/MyProject/School_Automation/courses_template.csv'
TEACHERS_FILE = '/Users/anatoliy/MyProject/School_Automation/teachers_list.csv'
OUTPUT_FILE = '/Users/anatoliy/MyProject/School_Automation/courses_with_teachers.csv'

# Точний список, який ти надав (працює як годинник)
memory_text = """
Світлана Целіньtselin_svitlana@schoolgus.ukr.education
Леся Дмитрівlesynap75@schoolgus.ukr.education
Олександра Демкураdemkura_oleksandra@schoolgus.ukr.education
Зоряна Башуцькаbashutska_zoriana@schoolgus.ukr.education
Ореста Матвійчукmatviichuk_oresta@schoolgus.ukr.education
Павло Синишинsynyshyn_pavlo@schoolgus.ukr.education
Петро Фатюкfatiuk_petro@schoolgus.ukr.education
Тарас Василикvasylyk_taras@schoolgus.ukr.education
Ірина Сукачsukach_iryna@schoolgus.ukr.education
Руслан Марцінковськийmartsinkovskyi_ruslan@schoolgus.ukr.education
Олександра Дроникdronyk_oleksandra@schoolgus.ukr.education
Марія Байдаbaida_mariia@schoolgus.ukr.education
Олександр Ковальkoval_oleksandr@schoolgus.ukr.education
Оксана Юхимчукdochak_oksana@schoolgus.ukr.education
Любов Черепакаcherepaka_liubov@schoolgus.ukr.education
Олександр Іванович Вацлавівvatslaviv_oleksandr@schoolgus.ukr.education
Лариса Шкроботshkrobot_larysa@schoolgus.ukr.education
Лілія Івачевськаivachevska_liliia@schoolgus.ukr.education
Віталій Шмигановськийshmyhanovskyi_vitalii@schoolgus.ukr.education
Тетяна Стефанівstefaniv_tetiana@schoolgus.ukr.education
Вікторія Болібрухvolibrukh_viktoriia@schoolgus.ukr.education
Ірина Вайдаvaida_iryna@schoolgus.ukr.education
Людмила Зубрицькаzubrytska_liudmyla@schoolgus.ukr.education
Світлана Процківprotskiv_svitlana@schoolgus.ukr.education
Наталія Човганchovhan_nataliia@schoolgus.ukr.education
Маріанна Бобровськаbobrovska_marianna@schoolgus.ukr.education
Кароліна Шмигановськаshmyhanovska_karolina@schoolgus.ukr.education
Юрій Козирkozyr_yurii@schoolgus.ukr.education
Тетяна Черкасcherkas_tetiana@schoolgus.ukr.education
Марія Шафранськаshafranska_mariia@schoolgus.ukr.education
Ірина Галинякhalyniak_iryna@schoolgus.ukr.education
Наталія Фатюкfatiuk_nataliia@schoolgus.ukr.education
Люба Слободянslobodian_liuba@schoolgus.ukr.education
Ірина ЦуприкTsupryk_Iryna@schoolgus.ukr.education
Мар'яна Чернишchernysh_Mariana@schoolgus.ukr.education
Діана Ключевичkliuchevych_diana@schoolgus.ukr.education
Ірина Тахновськаtakhnovska_iryna@schoolgus.ukr.education
Олег Галинякhalyniak_oleh@schoolgus.ukr.education
Інна Марцінковськаmartsinkovska_inna@schoolgus.ukr.education
Марія Джавлюкdzhavliuk_mariia@schoolgus.ukr.education
Надія Квасницькаkvasnytska_nadiia@schoolgus.ukr.education
Світлана Суховеркоsukhoverko_svitlana@schoolgus.ukr.education
Ольга Кришталовичkryshtalovych_olha@schoolgus.ukr.education
Ольга Цинцарtsyntsar_olha@schoolgus.ukr.education
Оксана Мартишкоmartyshko_oksana@schoolgus.ukr.education
Тетяна Дмитрівdmytriv_tetiana@schoolgus.ukr.education
Галина Ковальчукkovalchuk_halyna@schoolgus.ukr.education
Тетяна Пріянpriian_tetiana@schoolgus.ukr.education
Ігор Чубейchubei_ihor@schoolgus.ukr.education
Ольга Пилипаpylypa_olha@schoolgus.ukr.education
Світлана Ніколайчукnikolaichuk_svitlana@schoolgus.ukr.education
Галина Галакhalak_halyna@schoolgus.ukr.education
Ірина Болібрухpiatnychuk_iryna@schoolgus.ukr.education
Михайло Ковальчукkovalchuk_mykhailo@schoolgus.ukr.education
Тетяна Курпітаkurpita_tetiana@schoolgus.ukr.education
Руслана Кишканkyshkan_ruslana@schoolgus.ukr.education
Ірина Троянtroian_iryna@schoolgus.ukr.education
Уляна Андрусишинandrusyshyn_uliana@schoolgus.ukr.education
Уляна Стебелецькаstebeletska_uliana@schoolgus.ukr.education
Олексій Клизубklyzub_oleksii@schoolgus.ukr.education
Володимир Квасніцькийkvasnitskyi_volodymyr@schoolgus.ukr.education
Оксана Гуличgulych_oksana@schoolgus.ukr.education
Ольга Скурськаskurska_olha@schoolgus.ukr.education
Оксана Івасюкivasiuk_oksana@schoolgus.ukr.education
Олександра Мачуженкоmachuzhenko_oleksandra@schoolgus.ukr.education
Руслан Кіндзерkindzer_ruslan@schoolgus.ukr.education
Наталія Слабіцькаslabitska_nataliia@schoolgus.ukr.education
Оксана Боднарbodnar_oksana@schoolgus.ukr.education
Світлана Козирkozyr_svitlana@schoolgus.ukr.education
Валентина Оліярoliiar_valentyna@schoolgus.ukr.education
Іванна Саганsahan_ivanna@schoolgus.ukr.education
Світлана Вацлавівvatslaviv_svitlana@schoolgus.ukr.education
Надія Решетилоreshetylo_nadiia@schoolgus.ukr.education
Олександра Кондроkondro_oleksandra@schoolgus.ukr.education
"""

exact_map = {}
for line in memory_text.strip().split('\n'):
    match = re.search(r'([А-ЯІЇЄҐа-яіїєґ\s\'’]+)([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+)', line)
    if match:
        name_parts = match.group(1).lower().split()
        email = match.group(2).lower()
        for p in name_parts:
            if len(p) > 2: # Зберігаємо і прізвище, і ім'я як ключі до цього імейлу
                exact_map[p] = email

ukr_to_lat = {
    'а':'a', 'б':'b', 'в':'v', 'г':'h', 'ґ':'g', 'д':'d', 'е':'e', 'є':'ye', 'ж':'zh', 'з':'z',
    'и':'y', 'і':'i', 'ї':'yi', 'й':'i', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p',
    'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'kh', 'ц':'ts', 'ч':'ch', 'ш':'sh', 'щ':'shch',
    'ь':'', 'ю':'iu', 'я':'ia', "'":'', '’':''
}

def transliterate(word):
    word = word.lower()
    lat = ''.join(ukr_to_lat.get(c, c) for c in word)
    if word.startswith('є'): lat = 'e' + lat[2:]
    if word.startswith('ю'): lat = 'u' + lat[2:]
    if word.startswith('я'): lat = 'a' + lat[2:]
    return lat

db_emails = []
with open(TEACHERS_FILE, mode='r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        for cell in row:
            if '@' in cell and '.' in cell:
                db_emails.append(cell.strip().lower())

updated_rows = []
matched_count = 0

with open(COURSES_FILE, mode='r', encoding='utf-8') as f:
    reader = csv.reader(f)
    headers = next(reader)
    name_idx = headers.index('Teacher_Name')
    email_idx = headers.index('Teacher_Email')
    
    for row in reader:
        teacher_name_raw = row[name_idx].strip()
        if teacher_name_raw:
            words_ukr = re.findall(r'[А-ЯІЇЄҐа-яіїєґ]+', teacher_name_raw)
            found_email = None
            
            # 1. Точний пошук по твоїй базі
            for w in words_ukr:
                if w.lower() in exact_map:
                    found_email = exact_map[w.lower()]
                    break
                    
            # 2. Якщо раптом немає в твоїй, шукаємо серед 625 через скоринг
            if not found_email:
                words_lat = [transliterate(w) for w in words_ukr if len(w) > 2]
                best_match = None
                best_score = 0
                
                for email in db_emails:
                    username = email.split('@')[0]
                    score = 0
                    for w in words_lat:
                        if w in username:
                            score += len(w) # Довші слова дають більше балів
                    
                    if score > best_score:
                        best_score = score
                        best_match = email
                        
                if best_match and best_score >= 4:
                    found_email = best_match

            if found_email:
                row[email_idx] = found_email
                matched_count += 1
                
        updated_rows.append(row)

with open(OUTPUT_FILE, mode='w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(headers)
    writer.writerows(updated_rows)

print('\n🎉 Обробка завершена успішно!')
print(f'📊 Завантажено вчителів із файлу (резерв): {len(db_emails)}')
print(f'🧠 Вбудовано ідеальних збігів з пам\'яті: {len(set(exact_map.values()))}')
print(f'📋 Автоматично підтягнуто email-ів до курсів: {matched_count}')
