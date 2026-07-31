#!/bin/bash
echo "Збір курсів Початкової Школи..."

GAM_BIN="/Users/anatoliy/bin/gam7/gam"
ADMIN_USER="martsinkovskiy@schoolgus.ukr.education"

# Збираємо чисті ID курсів
courses=$($GAM_BIN print courses state ACTIVE | grep -E "клас|Початкова" | cut -d, -f1)

for course_id in $courses; do
  if [[ "$course_id" =~ ^[0-9]+$ ]]; then
    echo "----------------------------------------"
    echo "Обробка курсу ID: $course_id"
    
    # Використовуємо правильний синтаксис створення завдання через обліковий запис адміністратора
    $GAM_BIN user "$ADMIN_USER" create coursework "$course_id" \
      title "Шаблон оцінювання НУШ (Не видаляти)" \
      state DRAFT \
      description "Цей шаблон створено адміністратором. Використовуйте його для швидкого копіювання критеріїв оцінювання 1-4 класів." \
      rubric drivefileid "15HBBsdgwLUcOPvMwcdhIBeFUdCfM8Krf"

    echo "Лог: Запит на додавання критеріїв відправлено для курсу $course_id"
  fi
done
echo "----------------------------------------"
echo "Автоматичне налаштування завершено!"
