   #!/bin/bash
   if command -v gam &> /dev/null; then
     GAM="gam"
   elif [ -f "/Users/anatoliy/bin/gam7/gam" ]; then
     GAM="/Users/anatoliy/bin/gam7/gam"
   else
     echo "Помилка: GAM не знайдено ні в системі, ні за шляхом /Users/anatoliy/bin/gam7/gam"
     exit 1
   fi
   $GAM create course alias "11_11_Eksternat_2026_2027" name "11. 11 клас. Екстернат (2026-2027)" owner "martsinkovskiy@schoolgus.ukr.education" status ACTIVE
   $GAM course "11_11_Eksternat_2026_2027" add teacher demkura_oleksandra@schoolgus.ukr.education
   $GAM course "11_11_Eksternat_2026_2027" add teacher tselin_svitlana@schoolgus.ukr.education
   $GAM course "11_11_Eksternat_2026_2027" add teacher lesynap75@schoolgus.ukr.education
   $GAM course "11_11_Eksternat_2026_2027" create topic "01. Українська мова"
   $GAM course "11_11_Eksternat_2026_2027" create topic "02. Українська література"
   $GAM course "11_11_Eksternat_2026_2027" create topic "03. Зарубіжна література"
   $GAM course "11_11_Eksternat_2026_2027" create topic "04. Англійська мова"
   $GAM course "11_11_Eksternat_2026_2027" create topic "05. Друга іноземна мова (Німецька)"
   $GAM course "11_11_Eksternat_2026_2027" create topic "06. Історія України"
   $GAM course "11_11_Eksternat_2026_2027" create topic "07. Всесвітня історія"
   $GAM course "11_11_Eksternat_2026_2027" create topic "08. Алгебра і початки аналізу"
   $GAM course "11_11_Eksternat_2026_2027" create topic "09. Геометрія"
   $GAM course "11_11_Eksternat_2026_2027" create topic "10. Біологія і екологія"
   $GAM course "11_11_Eksternat_2026_2027" create topic "11. Географія"
   $GAM course "11_11_Eksternat_2026_2027" create topic "12. Фізика і астрономія"
   $GAM course "11_11_Eksternat_2026_2027" create topic "13. Хімія"
   $GAM course "11_11_Eksternat_2026_2027" create topic "14. Інформатика"
   $GAM course "11_11_Eksternat_2026_2027" create topic "15. Мистецтво"
   $GAM course "11_11_Eksternat_2026_2027" create topic "16. Технології"
   $GAM course "11_11_Eksternat_2026_2027" create topic "17. Захист України"
   $GAM course "11_11_Eksternat_2026_2027" create topic "18. Фізична культура"
   $GAM course "11_11_Eksternat_2026_2027" create topic "19. Основи християнської етики"
   cat << 'INNER_EOF' > create_11th_courses.csv
alias,name,owner
11_11A_UkrMova_26,11. 11-А клас. Українська мова (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_UkrLit_26,11. 11-А клас. Українська література (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_ZarLit_26,11. 11-А клас. Зарубіжна література (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Eng_26,11. 11-А клас. Англійська мова (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Ger_26,11. 11-А клас. Друга іноземна мова (Німецька) (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_IstUkr_26,11. 11-А клас. Історія України (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_VsesIst_26,11. 11-А клас. Всесвітня історія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Alg_26,11. 11-А клас. Алгебра і початки аналізу (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Geo_26,11. 11-А клас. Геометрія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Bio_26,11. 11-А клас. Біологія і екологія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Geogr_26,11. 11-А клас. Географія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Fiz_26,11. 11-А клас. Фізика і астрономія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Him_26,11. 11-А клас. Хімія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Inf_26,11. 11-А клас. Інформатика (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Myst_26,11. 11-А клас. Мистецтво (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Tech_26,11. 11-А клас. Технології (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Zakh_26,11. 11-А клас. Захист України (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_FizKul_26,11. 11-А клас. Фізична культура (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11A_Hryst_26,11. 11-А клас. Основи християнської етики (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_UkrMova_26,11. 11-Б клас. Українська мова (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_UkrLit_26,11. 11-Б клас. Українська література (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_ZarLit_26,11. 11-Б клас. Зарубіжна література (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Eng_26,11. 11-Б клас. Англійська мова (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Ger_26,11. 11-Б клас. Друга іноземна мова (Німецька) (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_IstUkr_26,11. 11-Б клас. Історія України (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_VsesIst_26,11. 11-Б клас. Всесвітня історія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Alg_26,11. 11-Б клас. Алгебра і початки аналізу (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Geo_26,11. 11-Б клас. Геометрія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Bio_26,11. 11-Б клас. Біологія і екологія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Geogr_26,11. 11-Б клас. Географія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Fiz_26,11. 11-Б клас. Фізика і астрономія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Him_26,11. 11-Б клас. Хімія (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Inf_26,11. 11-Б клас. Інформатика (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Myst_26,11. 11-Б клас. Мистецтво (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Tech_26,11. 11-Б клас. Технології (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Zakh_26,11. 11-Б клас. Захист України (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_FizKul_26,11. 11-Б клас. Фізична культура (2026-2027),martsinkovskiy@schoolgus.ukr.education
11_11B_Hryst_26,11. 11-Б клас. Основи християнської етики (2026-2027),martsinkovskiy@schoolgus.ukr.education
INNER_EOF
   $GAM csv create_11th_courses.csv $GAM create course alias "~alias" name "~name" owner "~owner" status ACTIVE
   $GAM csv create_11th_courses.csv $GAM course "~alias" add teacher demkura_oleksandra@schoolgus.ukr.education
   $GAM csv create_11th_courses.csv $GAM course "~alias" add teacher tselin_svitlana@schoolgus.ukr.education
   $GAM csv create_11th_courses.csv $GAM course "~alias" add teacher lesynap75@schoolgus.ukr.education
   echo "Готово! Старша школа (11 класи) успішно налаштована."
