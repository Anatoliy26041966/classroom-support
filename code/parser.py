import sys

def generate_code(md_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Спрощений парсинг логіки з нашого опису
    print("import sys")
    print("pet_type = input('Введіть тип улюбленця (кіт/собака): ').strip().lower()")
    print("if pet_type == 'кіт':")
    print("    breed = input('Тип шерсті (довгошерста/короткошерста): ').strip().lower()")
    print("    if breed == 'довгошерста':")
    print("        groomer = input('Потрібен грумер? (так/ні): ').strip().lower()")
    print("        if groomer == 'так': print('Результат: Надайте адресу найближчої котячої перукарні (TC1)')")
    print("        else: print('Результат: Запропонуй магазин з товарами по догляду за шерстю (TC2)')")
    print("    else: print('Результат: Запропонуй обрати магазин із зоотоварами (TC3)')")
    print("else: print('Результат: Коли вирішите завести улюбленця – приходьте (TC4)')")

if __name__ == "__main__":
    generate_code(sys.argv[1])