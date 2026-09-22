import csv

with open('./data/users_clean.csv', 'r', encoding='utf-8') as f:
    users = list(csv.DictReader(f))

user_map = {u['primaryEmail'].strip().lower(): u.get('orgUnitPath', 'НЕ ЗНАЙДЕНО') for u in users}

key_staff = {
    'havryliuk_olesia@schoolgus.ukr.education': 'Директор (Гаврилюк О.)',
    'demkura_oleksandra@schoolgus.ukr.education': 'Колишній директор (Демкура О.)',
    'lesynap75@schoolgus.ukr.education': 'Завуч (Дмитрів Л.М.)',
    'protskiv_svitlana@schoolgus.ukr.education': 'Завуч (Процьків С.)',
    'tselin_svitlana@schoolgus.ukr.education': 'Завуч (Целін С.)'
}

print("\n================ АУДИТ КЕРІВНОГО СКАДУ В OU ================")
for email, role in key_staff.items():
    ou = user_map.get(email.lower(), '❌ Акаунт не знайдено у users_clean.csv')
    print(f"- {role}\n  Email: {email}\n  OU:    {ou}\n")
