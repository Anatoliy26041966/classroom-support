#!/bin/bash

# Створюємо один головний курс для 10-Екстернату
/Users/anatoliy/bin/gam7/gam create course alias "10_10_Eksternat_2026_2027" name "10. 10 клас. Екстернат (2026-2027)" owner "martsinkovskiy@schoolgus.ukr.education" status ACTIVE

# Одразу додаємо трьох завучів/адміністраторів
/Users/anatoliy/bin/gam7/gam course "10_10_Eksternat_2026_2027" add teacher demkura_oleksandra@schoolgus.ukr.education
/Users/anatoliy/bin/gam7/gam course "10_10_Eksternat_2026_2027" add teacher tselin_svitlana@schoolgus.ukr.education
/Users/anatoliy/bin/gam7/gam course "10_10_Eksternat_2026_2027" add teacher lesynap75@schoolgus.ukr.education
