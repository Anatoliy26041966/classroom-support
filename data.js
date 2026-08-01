const coursesData = [
  {
    "id": 1,
    "class": "1-В",
    "subject": "Англійська мова",
    "code": "mwnj6tda"
  },
  {
    "id": 2,
    "class": "5-Г",
    "subject": "Здоров'я, безпека та добробут",
    "code": "bhzdplje"
  },
  {
    "id": 3,
    "class": "5-В",
    "subject": "Здоров'я, безпека та добробут",
    "code": "mnz3vpf5"
  },
  {
    "id": 4,
    "class": "5-Б",
    "subject": "Здоров'я, безпека та добробут",
    "code": "3tdkdx6c"
  },
  {
    "id": 5,
    "class": "11-Б",
    "subject": "Основи християнської етики",
    "code": "mmfn6khu"
  },
  {
    "id": 6,
    "class": "11-Б",
    "subject": "Фізична культура",
    "code": "66echmxe"
  },
  {
    "id": 7,
    "class": "11-Б",
    "subject": "Технології",
    "code": "hgrnvopx"
  },
  {
    "id": 8,
    "class": "11-Б",
    "subject": "Захист України",
    "code": "v26dv7qu"
  },
  {
    "id": 9,
    "class": "11-Б",
    "subject": "Мистецтво",
    "code": "dlwgwdeh"
  },
  {
    "id": 10,
    "class": "11-Б",
    "subject": "Хімія",
    "code": "h2ell2bp"
  },
  {
    "id": 11,
    "class": "11-Б",
    "subject": "Інформатика",
    "code": "jsvvnw5i"
  },
  {
    "id": 12,
    "class": "11-Б",
    "subject": "Фізика і астрономія",
    "code": "cpzpiy6x"
  },
  {
    "id": 13,
    "class": "11-Б",
    "subject": "Географія",
    "code": "4r25e4he"
  },
  {
    "id": 14,
    "class": "11-Б",
    "subject": "Біологія і екологія",
    "code": "r6xjggqh"
  },
  {
    "id": 15,
    "class": "11-Б",
    "subject": "Геометрія",
    "code": "rhijwxkr"
  },
  {
    "id": 16,
    "class": "11-Б",
    "subject": "Алгебра і початки аналізу",
    "code": "nea6iffo"
  },
  {
    "id": 17,
    "class": "11-Б",
    "subject": "Всесвітня історія",
    "code": "segca7oh"
  },
  {
    "id": 18,
    "class": "11-Б",
    "subject": "Історія України",
    "code": "ec6keuqf"
  },
  {
    "id": 19,
    "class": "11-Б",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "tazmc6em"
  },
  {
    "id": 20,
    "class": "11-Б",
    "subject": "Зарубіжна література",
    "code": "rsfeepm7"
  },
  {
    "id": 21,
    "class": "11-Б",
    "subject": "Англійська мова",
    "code": "gtcsb64g"
  },
  {
    "id": 22,
    "class": "11-Б",
    "subject": "Українська література",
    "code": "qrq46gvo"
  },
  {
    "id": 23,
    "class": "11-Б",
    "subject": "Українська мова",
    "code": "yuoq6ug6"
  },
  {
    "id": 24,
    "class": "11-А",
    "subject": "Основи християнської етики",
    "code": "jkh7w5oy"
  },
  {
    "id": 25,
    "class": "11-А",
    "subject": "Захист України",
    "code": "av2me3bz"
  },
  {
    "id": 26,
    "class": "11-А",
    "subject": "Технології",
    "code": "xyjmevee"
  },
  {
    "id": 27,
    "class": "11-А",
    "subject": "Фізична культура",
    "code": "7omvh6nh"
  },
  {
    "id": 28,
    "class": "11-А",
    "subject": "Мистецтво",
    "code": "fmmfi35j"
  },
  {
    "id": 29,
    "class": "11-А",
    "subject": "Хімія",
    "code": "jmyi4r6q"
  },
  {
    "id": 30,
    "class": "11-А",
    "subject": "Інформатика",
    "code": "hdxr47l3"
  },
  {
    "id": 31,
    "class": "11-А",
    "subject": "Фізика і астрономія",
    "code": "h3s3wd7s"
  },
  {
    "id": 32,
    "class": "11-А",
    "subject": "Географія",
    "code": "zst54tqz"
  },
  {
    "id": 33,
    "class": "11-А",
    "subject": "Біологія і екологія",
    "code": "arulahed"
  },
  {
    "id": 34,
    "class": "11-А",
    "subject": "Всесвітня історія",
    "code": "dnmghxgv"
  },
  {
    "id": 35,
    "class": "11-А",
    "subject": "Історія України",
    "code": "a6vupuzp"
  },
  {
    "id": 36,
    "class": "11-А",
    "subject": "Алгебра і початки аналізу",
    "code": "exib4ak2"
  },
  {
    "id": 37,
    "class": "11-А",
    "subject": "Геометрія",
    "code": "rtsp5j33"
  },
  {
    "id": 38,
    "class": "11-А",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "pgproryi"
  },
  {
    "id": 39,
    "class": "11-А",
    "subject": "Зарубіжна література",
    "code": "z3isuddm"
  },
  {
    "id": 40,
    "class": "11-А",
    "subject": "Українська література",
    "code": "6vqbhsdv"
  },
  {
    "id": 41,
    "class": "11-А",
    "subject": "Англійська мова",
    "code": "ere65sph"
  },
  {
    "id": 42,
    "class": "11-А",
    "subject": "Українська мова",
    "code": "rp3n5o7q"
  },
  {
    "id": 43,
    "class": "10-Б",
    "subject": "Основи християнської етики",
    "code": "xo6kfic3"
  },
  {
    "id": 44,
    "class": "10-Б",
    "subject": "Фізична культура",
    "code": "3tvdvhfh"
  },
  {
    "id": 45,
    "class": "10-Б",
    "subject": "Технології",
    "code": "dvgevnx6"
  },
  {
    "id": 46,
    "class": "10-Б",
    "subject": "Захист України",
    "code": "sayrnjak"
  },
  {
    "id": 47,
    "class": "10-Б",
    "subject": "Мистецтво",
    "code": "vvxweb7w"
  },
  {
    "id": 48,
    "class": "10-Б",
    "subject": "Інформатика",
    "code": "fezlouly"
  },
  {
    "id": 49,
    "class": "10-Б",
    "subject": "Фізика і астрономія",
    "code": "jr44lobh"
  },
  {
    "id": 50,
    "class": "10-Б",
    "subject": "Хімія",
    "code": "bi67sswt"
  },
  {
    "id": 51,
    "class": "10-Б",
    "subject": "Географія",
    "code": "v6v2f4dz"
  },
  {
    "id": 52,
    "class": "10-Б",
    "subject": "Біологія і екологія",
    "code": "7y4siccj"
  },
  {
    "id": 53,
    "class": "10-Б",
    "subject": "Геометрія",
    "code": "3llfqinz"
  },
  {
    "id": 54,
    "class": "10-Б",
    "subject": "Всесвітня історія",
    "code": "ylohbqbo"
  },
  {
    "id": 55,
    "class": "10-Б",
    "subject": "Громадянська освіта",
    "code": "azeurwkc"
  },
  {
    "id": 56,
    "class": "10-Б",
    "subject": "Алгебра і початки аналізу",
    "code": "eshsyd52"
  },
  {
    "id": 57,
    "class": "10-Б",
    "subject": "Історія України",
    "code": "etfrgd2b"
  },
  {
    "id": 58,
    "class": "10-Б",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "yymhxjss"
  },
  {
    "id": 59,
    "class": "10-Б",
    "subject": "Англійська мова",
    "code": "52s2jjy7"
  },
  {
    "id": 60,
    "class": "10-Б",
    "subject": "Зарубіжна література",
    "code": "jpvd6wil"
  },
  {
    "id": 61,
    "class": "10-Б",
    "subject": "Українська мова",
    "code": "5juzmgns"
  },
  {
    "id": 62,
    "class": "10-Б",
    "subject": "Українська література",
    "code": "c3ulpo74"
  },
  {
    "id": 63,
    "class": "10-А",
    "subject": "Основи християнської етики",
    "code": "4ko4bau4"
  },
  {
    "id": 64,
    "class": "10-А",
    "subject": "Фізична культура",
    "code": "t7klyled"
  },
  {
    "id": 65,
    "class": "10-А",
    "subject": "Захист України",
    "code": "j7nhpl6q"
  },
  {
    "id": 66,
    "class": "10-А",
    "subject": "Мистецтво",
    "code": "s3g4qy6m"
  },
  {
    "id": 67,
    "class": "10-А",
    "subject": "Технології",
    "code": "zfjuyzga"
  },
  {
    "id": 68,
    "class": "10-А",
    "subject": "Інформатика",
    "code": "z4wwauqi"
  },
  {
    "id": 69,
    "class": "10-А",
    "subject": "Фізика і астрономія",
    "code": "7q2mjwk3"
  },
  {
    "id": 70,
    "class": "10-А",
    "subject": "Біологія і екологія",
    "code": "e6hwdlkp"
  },
  {
    "id": 71,
    "class": "10-А",
    "subject": "Географія",
    "code": "pnknvhz6"
  },
  {
    "id": 72,
    "class": "10-А",
    "subject": "Хімія",
    "code": "kio2fgo4"
  },
  {
    "id": 73,
    "class": "10-А",
    "subject": "Геометрія",
    "code": "vbgoujng"
  },
  {
    "id": 74,
    "class": "10-А",
    "subject": "Громадянська освіта",
    "code": "ljfl6nab"
  },
  {
    "id": 75,
    "class": "10-А",
    "subject": "Всесвітня історія",
    "code": "f5qxnxyr"
  },
  {
    "id": 76,
    "class": "10-А",
    "subject": "Алгебра і початки аналізу",
    "code": "6ueqxpmo"
  },
  {
    "id": 77,
    "class": "10-А",
    "subject": "Історія України",
    "code": "h7uwhzp7"
  },
  {
    "id": 78,
    "class": "10-А",
    "subject": "Зарубіжна література",
    "code": "232akjfz"
  },
  {
    "id": 79,
    "class": "10-А",
    "subject": "Українська мова",
    "code": "p3nclqoz"
  },
  {
    "id": 80,
    "class": "10-А",
    "subject": "Українська література",
    "code": "hrpqxpur"
  },
  {
    "id": 81,
    "class": "10-А",
    "subject": "Англійська мова",
    "code": "vrosmf4g"
  },
  {
    "id": 82,
    "class": "10-А",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "ij7avdha"
  },
  {
    "id": 83,
    "class": "10 Екстернат",
    "subject": "Навчальний курс",
    "code": "cizgmo3z"
  },
  {
    "id": 84,
    "class": "11 Екстернат",
    "subject": "Навчальний курс",
    "code": "hpwlgqb7"
  },
  {
    "id": 85,
    "class": "9-Г",
    "subject": "Фізична культура",
    "code": "zlyd44f6"
  },
  {
    "id": 86,
    "class": "9-Г",
    "subject": "Основи християнської етики",
    "code": "2ehd2wxn"
  },
  {
    "id": 87,
    "class": "9-Г",
    "subject": "Здоров'я безпека та добробут",
    "code": "3ad6erym"
  },
  {
    "id": 88,
    "class": "9-Г",
    "subject": "Технології",
    "code": "5zo34acb"
  },
  {
    "id": 89,
    "class": "9-Г",
    "subject": "Мистецтво",
    "code": "ialpngfc"
  },
  {
    "id": 90,
    "class": "9-Г",
    "subject": "Інформатика",
    "code": "hvlo6ghh"
  },
  {
    "id": 91,
    "class": "9-Г",
    "subject": "Фізика",
    "code": "mqd2uolo"
  },
  {
    "id": 92,
    "class": "9-Г",
    "subject": "Географія",
    "code": "ofeot6bz"
  },
  {
    "id": 93,
    "class": "9-Г",
    "subject": "Хімія",
    "code": "ji7javuq"
  },
  {
    "id": 94,
    "class": "9-Г",
    "subject": "Біологія",
    "code": "abmlmn4c"
  },
  {
    "id": 95,
    "class": "9-Г",
    "subject": "Геометрія",
    "code": "dzzzveuv"
  },
  {
    "id": 96,
    "class": "9-Г",
    "subject": "Алгебра",
    "code": "stlb5igu"
  },
  {
    "id": 97,
    "class": "9-Г",
    "subject": "Всесвітня історія",
    "code": "getmzopg"
  },
  {
    "id": 98,
    "class": "9-Г",
    "subject": "Основи правознавства",
    "code": "ufhx4427"
  },
  {
    "id": 99,
    "class": "9-Г",
    "subject": "Історія України",
    "code": "z3inxbch"
  },
  {
    "id": 100,
    "class": "9-Г",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "afgp5lj3"
  },
  {
    "id": 101,
    "class": "9-Г",
    "subject": "Англійська мова",
    "code": "onlk422b"
  },
  {
    "id": 102,
    "class": "9-Г",
    "subject": "Українська мова",
    "code": "evhmhyhf"
  },
  {
    "id": 103,
    "class": "9-Г",
    "subject": "Українська література",
    "code": "brsi3mqj"
  },
  {
    "id": 104,
    "class": "9-Г",
    "subject": "Зарубіжна література",
    "code": "26jvku3t"
  },
  {
    "id": 105,
    "class": "9-В",
    "subject": "Основи християнської етики",
    "code": "ej4wabc3"
  },
  {
    "id": 106,
    "class": "9-В",
    "subject": "Фізична культура",
    "code": "u5wm5lrf"
  },
  {
    "id": 107,
    "class": "9-В",
    "subject": "Здоров'я безпека та добробут",
    "code": "5t327fhq"
  },
  {
    "id": 108,
    "class": "9-В",
    "subject": "Технології",
    "code": "pbzi2dxf"
  },
  {
    "id": 109,
    "class": "9-В",
    "subject": "Мистецтво",
    "code": "7q5asx5b"
  },
  {
    "id": 110,
    "class": "9-В",
    "subject": "Інформатика",
    "code": "sorpca73"
  },
  {
    "id": 111,
    "class": "9-В",
    "subject": "Хімія",
    "code": "n3lohy6y"
  },
  {
    "id": 112,
    "class": "9-В",
    "subject": "Фізика",
    "code": "n3aiojwa"
  },
  {
    "id": 113,
    "class": "9-В",
    "subject": "Біологія",
    "code": "6gdedtp4"
  },
  {
    "id": 114,
    "class": "9-В",
    "subject": "Географія",
    "code": "uwdpse7k"
  },
  {
    "id": 115,
    "class": "9-В",
    "subject": "Геометрія",
    "code": "psvwzzyi"
  },
  {
    "id": 116,
    "class": "9-В",
    "subject": "Алгебра",
    "code": "gayytijx"
  },
  {
    "id": 117,
    "class": "9-В",
    "subject": "Основи правознавства",
    "code": "5rjxs7ky"
  },
  {
    "id": 118,
    "class": "9-В",
    "subject": "Історія України",
    "code": "hu7uol7p"
  },
  {
    "id": 119,
    "class": "9-В",
    "subject": "Всесвітня історія",
    "code": "zqh3iksk"
  },
  {
    "id": 120,
    "class": "9-В",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "ibwboi3s"
  },
  {
    "id": 121,
    "class": "9-В",
    "subject": "Англійська мова",
    "code": "6rsub4tv"
  },
  {
    "id": 122,
    "class": "9-В",
    "subject": "Зарубіжна література",
    "code": "x25kez3s"
  },
  {
    "id": 123,
    "class": "9-В",
    "subject": "Українська мова",
    "code": "xx7iyj5v"
  },
  {
    "id": 124,
    "class": "9-В",
    "subject": "Українська література",
    "code": "5cdgxlyi"
  },
  {
    "id": 125,
    "class": "9-Б",
    "subject": "Основи християнської етики",
    "code": "b2un2egg"
  },
  {
    "id": 126,
    "class": "9-Б",
    "subject": "Фізична культура",
    "code": "4yh53zjh"
  },
  {
    "id": 127,
    "class": "9-Б",
    "subject": "Технології",
    "code": "oxrbdpro"
  },
  {
    "id": 128,
    "class": "9-Б",
    "subject": "Мистецтво",
    "code": "tlp67ean"
  },
  {
    "id": 129,
    "class": "9-Б",
    "subject": "Здоров'я безпека та добробут",
    "code": "2z2hnooj"
  },
  {
    "id": 130,
    "class": "9-Б",
    "subject": "Хімія",
    "code": "35mehwyd"
  },
  {
    "id": 131,
    "class": "9-Б",
    "subject": "Інформатика",
    "code": "g5jlv46m"
  },
  {
    "id": 132,
    "class": "9-Б",
    "subject": "Фізика",
    "code": "6sdczyby"
  },
  {
    "id": 133,
    "class": "9-Б",
    "subject": "Біологія",
    "code": "xb4xfkab"
  },
  {
    "id": 134,
    "class": "9-Б",
    "subject": "Географія",
    "code": "x7oblh4t"
  },
  {
    "id": 135,
    "class": "9-Б",
    "subject": "Геометрія",
    "code": "n4rpwbdd"
  },
  {
    "id": 136,
    "class": "9-Б",
    "subject": "Алгебра",
    "code": "nttxbfpv"
  },
  {
    "id": 137,
    "class": "9-Б",
    "subject": "Всесвітня історія",
    "code": "vutajkyf"
  },
  {
    "id": 138,
    "class": "9-Б",
    "subject": "Історія України",
    "code": "5nfi77f2"
  },
  {
    "id": 139,
    "class": "9-Б",
    "subject": "Основи правознавства",
    "code": "jph3nuyn"
  },
  {
    "id": 140,
    "class": "9-Б",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "eboa3ino"
  },
  {
    "id": 141,
    "class": "9-Б",
    "subject": "Українська література",
    "code": "f2ehmfqr"
  },
  {
    "id": 142,
    "class": "9-Б",
    "subject": "Зарубіжна література",
    "code": "otoj32y3"
  },
  {
    "id": 143,
    "class": "9-Б",
    "subject": "Англійська мова",
    "code": "nsiqmdjx"
  },
  {
    "id": 144,
    "class": "9-Б",
    "subject": "Українська мова",
    "code": "7kkrdt3v"
  },
  {
    "id": 145,
    "class": "9-А",
    "subject": "Фізична культура",
    "code": "uahlflfa"
  },
  {
    "id": 146,
    "class": "9-А",
    "subject": "Основи християнської етики",
    "code": "h64lxca5"
  },
  {
    "id": 147,
    "class": "9-А",
    "subject": "Здоров'я безпека та добробут",
    "code": "oci5x753"
  },
  {
    "id": 148,
    "class": "9-А",
    "subject": "Технології",
    "code": "4c6xfeqz"
  },
  {
    "id": 149,
    "class": "9-А",
    "subject": "Мистецтво",
    "code": "akkc72s6"
  },
  {
    "id": 150,
    "class": "9-А",
    "subject": "Інформатика",
    "code": "cxu4yu5j"
  },
  {
    "id": 151,
    "class": "9-А",
    "subject": "Хімія",
    "code": "wionston"
  },
  {
    "id": 152,
    "class": "9-А",
    "subject": "Біологія",
    "code": "thdb6tph"
  },
  {
    "id": 153,
    "class": "9-А",
    "subject": "Фізика",
    "code": "akcffrbw"
  },
  {
    "id": 154,
    "class": "9-А",
    "subject": "Географія",
    "code": "2htrhdjg"
  },
  {
    "id": 155,
    "class": "9-А",
    "subject": "Всесвітня історія",
    "code": "lf7t56pa"
  },
  {
    "id": 156,
    "class": "9-А",
    "subject": "Історія України",
    "code": "wcy7nrqe"
  },
  {
    "id": 157,
    "class": "9-А",
    "subject": "Алгебра",
    "code": "qmeqx7wo"
  },
  {
    "id": 158,
    "class": "9-А",
    "subject": "Основи правознавства",
    "code": "kuj3r2fn"
  },
  {
    "id": 159,
    "class": "9-А",
    "subject": "Геометрія",
    "code": "46yf4x3w"
  },
  {
    "id": 160,
    "class": "9-А",
    "subject": "Українська мова",
    "code": "pjysncxd"
  },
  {
    "id": 161,
    "class": "9-А",
    "subject": "Українська література",
    "code": "kecin47z"
  },
  {
    "id": 162,
    "class": "9-А",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "csaiovea"
  },
  {
    "id": 163,
    "class": "9-А",
    "subject": "Англійська мова",
    "code": "nlkslict"
  },
  {
    "id": 164,
    "class": "9-А",
    "subject": "Зарубіжна література",
    "code": "yvekvyl5"
  },
  {
    "id": 165,
    "class": "9 Екстернат",
    "subject": "Навчальний курс",
    "code": "as2hkkzv"
  },
  {
    "id": 166,
    "class": "8-Г",
    "subject": "Основи християнської етики",
    "code": "vvyftqt5"
  },
  {
    "id": 167,
    "class": "8-Г",
    "subject": "Фізична культура",
    "code": "os6iu2td"
  },
  {
    "id": 168,
    "class": "8-Г",
    "subject": "Здоров'я безпека та добробут",
    "code": "5uizxwf4"
  },
  {
    "id": 169,
    "class": "8-Г",
    "subject": "Технології",
    "code": "nuuhsxd7"
  },
  {
    "id": 170,
    "class": "8-Г",
    "subject": "Мистецтво",
    "code": "5godnwvt"
  },
  {
    "id": 171,
    "class": "8-Г",
    "subject": "Інформатика",
    "code": "rgya7vlp"
  },
  {
    "id": 172,
    "class": "8-Г",
    "subject": "Хімія",
    "code": "apk5ibh7"
  },
  {
    "id": 173,
    "class": "8-Г",
    "subject": "Фізика",
    "code": "caferzi3"
  },
  {
    "id": 174,
    "class": "8-Г",
    "subject": "Географія",
    "code": "jur4gpfe"
  },
  {
    "id": 175,
    "class": "8-Г",
    "subject": "Біологія",
    "code": "akjbb2dm"
  },
  {
    "id": 176,
    "class": "8-Г",
    "subject": "Алгебра",
    "code": "w7guwgjk"
  },
  {
    "id": 177,
    "class": "8-Г",
    "subject": "Геометрія",
    "code": "dyrbqkyv"
  },
  {
    "id": 178,
    "class": "8-Г",
    "subject": "Всесвітня історія",
    "code": "yxz6osri"
  },
  {
    "id": 179,
    "class": "8-Г",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "ljptu5az"
  },
  {
    "id": 180,
    "class": "8-Г",
    "subject": "Історія України",
    "code": "6cctywxt"
  },
  {
    "id": 181,
    "class": "8-Г",
    "subject": "Англійська мова",
    "code": "qmysi54y"
  },
  {
    "id": 182,
    "class": "8-Г",
    "subject": "Зарубіжна література",
    "code": "mtqxfba4"
  },
  {
    "id": 183,
    "class": "8-Г",
    "subject": "Українська література",
    "code": "af27izfj"
  },
  {
    "id": 184,
    "class": "8-Г",
    "subject": "Українська мова",
    "code": "lgmenjcb"
  },
  {
    "id": 185,
    "class": "8-В",
    "subject": "Здоров'я безпека та добробут",
    "code": "bo5gzaen"
  },
  {
    "id": 186,
    "class": "8-В",
    "subject": "Основи християнської етики",
    "code": "dbwxvskl"
  },
  {
    "id": 187,
    "class": "8-В",
    "subject": "Фізична культура",
    "code": "ydnqq6te"
  },
  {
    "id": 188,
    "class": "8-В",
    "subject": "Технології",
    "code": "vltb23dl"
  },
  {
    "id": 189,
    "class": "8-В",
    "subject": "Мистецтво",
    "code": "legfeimm"
  },
  {
    "id": 190,
    "class": "8-В",
    "subject": "Інформатика",
    "code": "fd5yoaoj"
  },
  {
    "id": 191,
    "class": "8-В",
    "subject": "Хімія",
    "code": "o32aybxt"
  },
  {
    "id": 192,
    "class": "8-В",
    "subject": "Фізика",
    "code": "w6sdv6zt"
  },
  {
    "id": 193,
    "class": "8-В",
    "subject": "Біологія",
    "code": "x5k2pzmi"
  },
  {
    "id": 194,
    "class": "8-В",
    "subject": "Географія",
    "code": "h2aywmwe"
  },
  {
    "id": 195,
    "class": "8-В",
    "subject": "Алгебра",
    "code": "y7zxuiu4"
  },
  {
    "id": 196,
    "class": "8-В",
    "subject": "Геометрія",
    "code": "kf43lvzi"
  },
  {
    "id": 197,
    "class": "8-В",
    "subject": "Історія України",
    "code": "wnma4brf"
  },
  {
    "id": 198,
    "class": "8-В",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "4uedohop"
  },
  {
    "id": 199,
    "class": "8-В",
    "subject": "Всесвітня історія",
    "code": "optaj5vm"
  },
  {
    "id": 200,
    "class": "8-В",
    "subject": "Англійська мова",
    "code": "tjeocsjs"
  },
  {
    "id": 201,
    "class": "8-В",
    "subject": "Зарубіжна література",
    "code": "7xkgbjho"
  },
  {
    "id": 202,
    "class": "8-В",
    "subject": "Українська мова",
    "code": "z6u74jme"
  },
  {
    "id": 203,
    "class": "8-В",
    "subject": "Українська література",
    "code": "iczv22l2"
  },
  {
    "id": 204,
    "class": "8-Б",
    "subject": "Основи християнської етики",
    "code": "gduvcqyu"
  },
  {
    "id": 205,
    "class": "8-Б",
    "subject": "Здоров'я безпека та добробут",
    "code": "dtwt74mn"
  },
  {
    "id": 206,
    "class": "8-Б",
    "subject": "Фізична культура",
    "code": "7zp2ltao"
  },
  {
    "id": 207,
    "class": "8-Б",
    "subject": "Технології",
    "code": "ra5zgqzl"
  },
  {
    "id": 208,
    "class": "8-Б",
    "subject": "Мистецтво",
    "code": "zj5xplhk"
  },
  {
    "id": 209,
    "class": "8-Б",
    "subject": "Фізика",
    "code": "wk2utvu3"
  },
  {
    "id": 210,
    "class": "8-Б",
    "subject": "Інформатика",
    "code": "74wxac34"
  },
  {
    "id": 211,
    "class": "8-Б",
    "subject": "Хімія",
    "code": "eo5gilqc"
  },
  {
    "id": 212,
    "class": "8-Б",
    "subject": "Географія",
    "code": "s6pxfvdh"
  },
  {
    "id": 213,
    "class": "8-Б",
    "subject": "Біологія",
    "code": "e4bi5mdj"
  },
  {
    "id": 214,
    "class": "8-Б",
    "subject": "Геометрія",
    "code": "sypjmtgr"
  },
  {
    "id": 215,
    "class": "8-Б",
    "subject": "Алгебра",
    "code": "rcrbghvl"
  },
  {
    "id": 216,
    "class": "8-Б",
    "subject": "Всесвітня історія",
    "code": "b6z22zkl"
  },
  {
    "id": 217,
    "class": "8-Б",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "djuwczdt"
  },
  {
    "id": 218,
    "class": "8-Б",
    "subject": "Англійська мова",
    "code": "gkxuuywv"
  },
  {
    "id": 219,
    "class": "8-Б",
    "subject": "Історія України",
    "code": "qo3nt37t"
  },
  {
    "id": 220,
    "class": "8-Б",
    "subject": "Українська література",
    "code": "syyym4vw"
  },
  {
    "id": 221,
    "class": "8-Б",
    "subject": "Зарубіжна література",
    "code": "7p3kqffj"
  },
  {
    "id": 222,
    "class": "8-Б",
    "subject": "Українська мова",
    "code": "3242strf"
  },
  {
    "id": 223,
    "class": "8-А",
    "subject": "Основи християнської етики",
    "code": "dilj7z57"
  },
  {
    "id": 224,
    "class": "8-А",
    "subject": "Технології",
    "code": "f42hxpjy"
  },
  {
    "id": 225,
    "class": "8-А",
    "subject": "Фізична культура",
    "code": "qvaufecm"
  },
  {
    "id": 226,
    "class": "8-А",
    "subject": "Здоров'я безпека та добробут",
    "code": "gj2lh3mi"
  },
  {
    "id": 227,
    "class": "8-А",
    "subject": "Фізика",
    "code": "pjrql32s"
  },
  {
    "id": 228,
    "class": "8-А",
    "subject": "Хімія",
    "code": "mpmitg3g"
  },
  {
    "id": 229,
    "class": "8-А",
    "subject": "Мистецтво",
    "code": "oy2tzhgq"
  },
  {
    "id": 230,
    "class": "8-А",
    "subject": "Інформатика",
    "code": "dxwqid7p"
  },
  {
    "id": 231,
    "class": "8-А",
    "subject": "Географія",
    "code": "dks3xzoz"
  },
  {
    "id": 232,
    "class": "8-А",
    "subject": "Алгебра",
    "code": "izru7zml"
  },
  {
    "id": 233,
    "class": "8-А",
    "subject": "Біологія",
    "code": "jg5zups2"
  },
  {
    "id": 234,
    "class": "8-А",
    "subject": "Історія України",
    "code": "kggtwbud"
  },
  {
    "id": 235,
    "class": "8-А",
    "subject": "Геометрія",
    "code": "4fscrkdd"
  },
  {
    "id": 236,
    "class": "8-А",
    "subject": "Всесвітня історія",
    "code": "ztrxgul4"
  },
  {
    "id": 237,
    "class": "8-А",
    "subject": "Англійська мова",
    "code": "qut62ti6"
  },
  {
    "id": 238,
    "class": "8-А",
    "subject": "Українська література",
    "code": "7epf23fy"
  },
  {
    "id": 239,
    "class": "8-А",
    "subject": "Українська мова",
    "code": "g6sx4bfq"
  },
  {
    "id": 240,
    "class": "8-А",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "3v4tvsy3"
  },
  {
    "id": 241,
    "class": "8-А",
    "subject": "Зарубіжна література",
    "code": "ojbkzgcf"
  },
  {
    "id": 242,
    "class": "8 Екстернат",
    "subject": "Навчальний курс",
    "code": "ngruzjnw"
  },
  {
    "id": 243,
    "class": "7-Г",
    "subject": "Основи християнської етики",
    "code": "34ge7noe"
  },
  {
    "id": 244,
    "class": "7-Г",
    "subject": "Фізична культура",
    "code": "nxnqjrzr"
  },
  {
    "id": 245,
    "class": "7-Г",
    "subject": "Здоров'я безпека та добробут",
    "code": "nvojv32g"
  },
  {
    "id": 246,
    "class": "7-Г",
    "subject": "Технології",
    "code": "4tf6emed"
  },
  {
    "id": 247,
    "class": "7-Г",
    "subject": "Мистецтво",
    "code": "n75nbo3e"
  },
  {
    "id": 248,
    "class": "7-Г",
    "subject": "Інформатика",
    "code": "4cycldqe"
  },
  {
    "id": 249,
    "class": "7-Г",
    "subject": "Біологія",
    "code": "7q7c76qo"
  },
  {
    "id": 250,
    "class": "7-Г",
    "subject": "Хімія",
    "code": "5shqjx5i"
  },
  {
    "id": 251,
    "class": "7-Г",
    "subject": "Географія",
    "code": "wqbcnlup"
  },
  {
    "id": 252,
    "class": "7-Г",
    "subject": "Геометрія",
    "code": "rdqgwixh"
  },
  {
    "id": 253,
    "class": "7-Г",
    "subject": "Фізика",
    "code": "k6v5j4fd"
  },
  {
    "id": 254,
    "class": "7-Г",
    "subject": "Англійська мова",
    "code": "w56hs6vx"
  },
  {
    "id": 255,
    "class": "7-Г",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "r23i2gxg"
  },
  {
    "id": 256,
    "class": "7-Г",
    "subject": "Історія України",
    "code": "4rs7shyg"
  },
  {
    "id": 257,
    "class": "7-Г",
    "subject": "Алгебра",
    "code": "wpzmve7a"
  },
  {
    "id": 258,
    "class": "7-Г",
    "subject": "Всесвітня історія",
    "code": "3jg73bbu"
  },
  {
    "id": 259,
    "class": "7-В",
    "subject": "Основи християнської етики",
    "code": "j6ndpog6"
  },
  {
    "id": 260,
    "class": "7-Г",
    "subject": "Українська література",
    "code": "spxw56e6"
  },
  {
    "id": 261,
    "class": "7-Г",
    "subject": "Зарубіжна література",
    "code": "yy5e7ual"
  },
  {
    "id": 262,
    "class": "7-В",
    "subject": "Фізична культура",
    "code": "rrrx5hib"
  },
  {
    "id": 263,
    "class": "7-Г",
    "subject": "Українська мова",
    "code": "rldmscwu"
  },
  {
    "id": 264,
    "class": "7-В",
    "subject": "Здоров'я безпека та добробут",
    "code": "momuptwm"
  },
  {
    "id": 265,
    "class": "7-В",
    "subject": "Технології",
    "code": "lfv7ymxl"
  },
  {
    "id": 266,
    "class": "7-В",
    "subject": "Мистецтво",
    "code": "ykdp2ldi"
  },
  {
    "id": 267,
    "class": "7-В",
    "subject": "Інформатика",
    "code": "vn5idd5l"
  },
  {
    "id": 268,
    "class": "7-В",
    "subject": "Хімія",
    "code": "6z27jzrg"
  },
  {
    "id": 269,
    "class": "7-В",
    "subject": "Фізика",
    "code": "75eaqtqv"
  },
  {
    "id": 270,
    "class": "7-В",
    "subject": "Географія",
    "code": "4ykioh4q"
  },
  {
    "id": 271,
    "class": "7-В",
    "subject": "Алгебра",
    "code": "o4l2b5f7"
  },
  {
    "id": 272,
    "class": "7-В",
    "subject": "Геометрія",
    "code": "ioreuhit"
  },
  {
    "id": 273,
    "class": "7-В",
    "subject": "Біологія",
    "code": "uzd7zjuv"
  },
  {
    "id": 274,
    "class": "7-В",
    "subject": "Всесвітня історія",
    "code": "fi2thzyz"
  },
  {
    "id": 275,
    "class": "7-В",
    "subject": "Історія України",
    "code": "uaxyeqrm"
  },
  {
    "id": 276,
    "class": "7-В",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "mnnqgdhc"
  },
  {
    "id": 277,
    "class": "7-В",
    "subject": "Зарубіжна література",
    "code": "tgcelbqp"
  },
  {
    "id": 278,
    "class": "7-В",
    "subject": "Англійська мова",
    "code": "xxpvn5in"
  },
  {
    "id": 279,
    "class": "7-В",
    "subject": "Українська література",
    "code": "r2gribyq"
  },
  {
    "id": 280,
    "class": "7-Б",
    "subject": "Фізична культура",
    "code": "fbtvlk3p"
  },
  {
    "id": 281,
    "class": "7-Б",
    "subject": "Основи християнської етики",
    "code": "ziwxca3v"
  },
  {
    "id": 282,
    "class": "7-В",
    "subject": "Українська мова",
    "code": "v35vdicc"
  },
  {
    "id": 283,
    "class": "7-Б",
    "subject": "Здоров'я безпека та добробут",
    "code": "5hb6jty4"
  },
  {
    "id": 284,
    "class": "7-Б",
    "subject": "Мистецтво",
    "code": "iztcexxv"
  },
  {
    "id": 285,
    "class": "7-Б",
    "subject": "Технології",
    "code": "paznn7o3"
  },
  {
    "id": 286,
    "class": "7-Б",
    "subject": "Інформатика",
    "code": "iktrt4pw"
  },
  {
    "id": 287,
    "class": "7-Б",
    "subject": "Хімія",
    "code": "smj3scsz"
  },
  {
    "id": 288,
    "class": "7-Б",
    "subject": "Фізика",
    "code": "rhaojump"
  },
  {
    "id": 289,
    "class": "7-Б",
    "subject": "Всесвітня історія",
    "code": "y2xmekel"
  },
  {
    "id": 290,
    "class": "7-Б",
    "subject": "Геометрія",
    "code": "4ow5uis3"
  },
  {
    "id": 291,
    "class": "7-Б",
    "subject": "Алгебра",
    "code": "4aq6mj32"
  },
  {
    "id": 292,
    "class": "7-Б",
    "subject": "Біологія",
    "code": "bpnqcogl"
  },
  {
    "id": 293,
    "class": "7-Б",
    "subject": "Географія",
    "code": "slbxweab"
  },
  {
    "id": 294,
    "class": "7-Б",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "njpgjsxw"
  },
  {
    "id": 295,
    "class": "7-Б",
    "subject": "Історія України",
    "code": "3n56mavg"
  },
  {
    "id": 296,
    "class": "7-Б",
    "subject": "Англійська мова",
    "code": "rkv3vwp2"
  },
  {
    "id": 297,
    "class": "7-Б",
    "subject": "Зарубіжна література",
    "code": "bjncex3n"
  },
  {
    "id": 298,
    "class": "7-Б",
    "subject": "Українська література",
    "code": "hyvf4tkq"
  },
  {
    "id": 299,
    "class": "7-Б",
    "subject": "Українська мова",
    "code": "pzso3xmq"
  },
  {
    "id": 300,
    "class": "7-А",
    "subject": "Основи християнської етики",
    "code": "6vktj5cv"
  },
  {
    "id": 301,
    "class": "7-А",
    "subject": "Здоров'я безпека та добробут",
    "code": "44yvee63"
  },
  {
    "id": 302,
    "class": "7-А",
    "subject": "Фізична культура",
    "code": "lusvwk3i"
  },
  {
    "id": 303,
    "class": "7-А",
    "subject": "Технології",
    "code": "fpc5cyc2"
  },
  {
    "id": 304,
    "class": "7-А",
    "subject": "Фізика",
    "code": "ncdktcom"
  },
  {
    "id": 305,
    "class": "7-А",
    "subject": "Мистецтво",
    "code": "7c557it6"
  },
  {
    "id": 306,
    "class": "7-А",
    "subject": "Хімія",
    "code": "fbigulr7"
  },
  {
    "id": 307,
    "class": "7-А",
    "subject": "Інформатика",
    "code": "qelydw5l"
  },
  {
    "id": 308,
    "class": "7-А",
    "subject": "Географія",
    "code": "zwn26ztl"
  },
  {
    "id": 309,
    "class": "7-А",
    "subject": "Геометрія",
    "code": "dkm7hqwr"
  },
  {
    "id": 310,
    "class": "7-А",
    "subject": "Біологія",
    "code": "divse3jp"
  },
  {
    "id": 311,
    "class": "7-А",
    "subject": "Всесвітня історія",
    "code": "5dlgt7k3"
  },
  {
    "id": 312,
    "class": "7-А",
    "subject": "Історія України",
    "code": "mwbmv2wj"
  },
  {
    "id": 313,
    "class": "7-А",
    "subject": "Алгебра",
    "code": "hgogeb5u"
  },
  {
    "id": 314,
    "class": "7-А",
    "subject": "Англійська мова",
    "code": "f2xxfxya"
  },
  {
    "id": 315,
    "class": "7-А",
    "subject": "Українська література",
    "code": "lo6o4imt"
  },
  {
    "id": 316,
    "class": "7-А",
    "subject": "Зарубіжна література",
    "code": "e5dtyz6s"
  },
  {
    "id": 317,
    "class": "7-А",
    "subject": "Друга іноземна мова (Німецька)",
    "code": "fogy342o"
  },
  {
    "id": 318,
    "class": "7-А",
    "subject": "Українська мова",
    "code": "263kjet6"
  },
  {
    "id": 319,
    "class": "7 Екстернат",
    "subject": "Навчальний курс",
    "code": "7vclsr5c"
  },
  {
    "id": 320,
    "class": "6-Г",
    "subject": "Математика",
    "code": "zg2bq5bv"
  },
  {
    "id": 321,
    "class": "6-Г",
    "subject": "Українська мова",
    "code": "xmap25y7"
  },
  {
    "id": 322,
    "class": "6-Г",
    "subject": "Англійська мова (Гр. 2)",
    "code": "wlliok6e"
  },
  {
    "id": 323,
    "class": "6-Г",
    "subject": "Англійська мова (Гр. 1)",
    "code": "42uoiizi"
  },
  {
    "id": 324,
    "class": "6-Г",
    "subject": "Українська література",
    "code": "dpyq6mvs"
  },
  {
    "id": 325,
    "class": "6-Г",
    "subject": "Історія України. Всесвітня історія",
    "code": "e4xnldin"
  },
  {
    "id": 326,
    "class": "6-Г",
    "subject": "Географія",
    "code": "2qt7x4r2"
  },
  {
    "id": 327,
    "class": "6-Г",
    "subject": "Зарубіжна література",
    "code": "r2m26lsz"
  },
  {
    "id": 328,
    "class": "6-Г",
    "subject": "Пізнаємо природу",
    "code": "gu5wxplz"
  },
  {
    "id": 329,
    "class": "6-Г",
    "subject": "Інформатика (Гр. 1)",
    "code": "arzetocm"
  },
  {
    "id": 330,
    "class": "6-Г",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "nefbnbfe"
  },
  {
    "id": 331,
    "class": "6-Г",
    "subject": "Інформатика (Гр. 2)",
    "code": "ccpjzw6d"
  },
  {
    "id": 332,
    "class": "6-Г",
    "subject": "Физична культура",
    "code": "dsdxjlx5"
  },
  {
    "id": 333,
    "class": "6-Г",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "oz2e4bhh"
  },
  {
    "id": 334,
    "class": "6-Г",
    "subject": "Мистецтво",
    "code": "dekyeaz7"
  },
  {
    "id": 335,
    "class": "6-Г",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "7i5t5ai2"
  },
  {
    "id": 336,
    "class": "6-Г",
    "subject": "Логіка",
    "code": "smjfyylg"
  },
  {
    "id": 337,
    "class": "6-Г",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "ms6bzgvs"
  },
  {
    "id": 338,
    "class": "6-Г",
    "subject": "Основи християнської етики",
    "code": "hmmebfwu"
  },
  {
    "id": 339,
    "class": "6-В",
    "subject": "Математика",
    "code": "d2cqx4zf"
  },
  {
    "id": 340,
    "class": "6-В",
    "subject": "Українська мова",
    "code": "e6hgr6pl"
  },
  {
    "id": 341,
    "class": "6-В",
    "subject": "Англійська мова (Гр. 2)",
    "code": "2ifivaon"
  },
  {
    "id": 342,
    "class": "6-В",
    "subject": "Англійська мова (Гр. 1)",
    "code": "ajrgol7p"
  },
  {
    "id": 343,
    "class": "6-В",
    "subject": "Українська література",
    "code": "36rmw2sj"
  },
  {
    "id": 344,
    "class": "6-В",
    "subject": "Історія України. Всесвітня історія",
    "code": "u7oxobsv"
  },
  {
    "id": 345,
    "class": "6-В",
    "subject": "Географія",
    "code": "3smpaku6"
  },
  {
    "id": 346,
    "class": "6-В",
    "subject": "Зарубіжна література",
    "code": "ec3e3de5"
  },
  {
    "id": 347,
    "class": "6-В",
    "subject": "Пізнаємо природу",
    "code": "l23pvtff"
  },
  {
    "id": 348,
    "class": "6-В",
    "subject": "Інформатика (Гр. 1)",
    "code": "oelzdnav"
  },
  {
    "id": 349,
    "class": "6-В",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "ioeca4cj"
  },
  {
    "id": 350,
    "class": "6-В",
    "subject": "Інформатика (Гр. 2)",
    "code": "wrqb7c3q"
  },
  {
    "id": 351,
    "class": "6-В",
    "subject": "Физична культура",
    "code": "q5dc4eq2"
  },
  {
    "id": 352,
    "class": "6-В",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "umabj5kd"
  },
  {
    "id": 353,
    "class": "6-В",
    "subject": "Мистецтво",
    "code": "uai4ujno"
  },
  {
    "id": 354,
    "class": "6-В",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "2bxgen6j"
  },
  {
    "id": 355,
    "class": "6-В",
    "subject": "Логіка",
    "code": "wpwve5t5"
  },
  {
    "id": 356,
    "class": "6-В",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "jy6kjuxa"
  },
  {
    "id": 357,
    "class": "6-В",
    "subject": "Основи християнської етики",
    "code": "xleulwbl"
  },
  {
    "id": 358,
    "class": "6-Б",
    "subject": "Математика",
    "code": "5bivavyh"
  },
  {
    "id": 359,
    "class": "6-Б",
    "subject": "Українська мова",
    "code": "pbjzw624"
  },
  {
    "id": 360,
    "class": "6-Б",
    "subject": "Англійська мова (Гр. 2)",
    "code": "y3edpcdm"
  },
  {
    "id": 361,
    "class": "6-Б",
    "subject": "Англійська мова (Гр. 1)",
    "code": "sm3jxnwb"
  },
  {
    "id": 362,
    "class": "6-Б",
    "subject": "Українська література",
    "code": "hsqe37aa"
  },
  {
    "id": 363,
    "class": "6-Б",
    "subject": "Історія України. Всесвітня історія",
    "code": "snpjiw6t"
  },
  {
    "id": 364,
    "class": "6-Б",
    "subject": "Географія",
    "code": "lz2kedhm"
  },
  {
    "id": 365,
    "class": "6-Б",
    "subject": "Зарубіжна література",
    "code": "dh3pxc7y"
  },
  {
    "id": 366,
    "class": "6-Б",
    "subject": "Пізнаємо природу",
    "code": "gbe5uaal"
  },
  {
    "id": 367,
    "class": "6-Б",
    "subject": "Інформатика (Гр. 1)",
    "code": "zqhbrgh7"
  },
  {
    "id": 368,
    "class": "6-Б",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "mhqx2gn6"
  },
  {
    "id": 369,
    "class": "6-Б",
    "subject": "Інформатика (Гр. 2)",
    "code": "cee63n6p"
  },
  {
    "id": 370,
    "class": "6-Б",
    "subject": "Физична культура",
    "code": "gjphxc23"
  },
  {
    "id": 371,
    "class": "6-Б",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "ho6vavdi"
  },
  {
    "id": 372,
    "class": "6-Б",
    "subject": "Мистецтво",
    "code": "t55xhzut"
  },
  {
    "id": 373,
    "class": "6-Б",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "yx2et4bj"
  },
  {
    "id": 374,
    "class": "6-Б",
    "subject": "Логіка",
    "code": "vhmzplx3"
  },
  {
    "id": 375,
    "class": "6-Б",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "urb67i7t"
  },
  {
    "id": 376,
    "class": "6-Б",
    "subject": "Основи християнської етики",
    "code": "stxm3ujy"
  },
  {
    "id": 377,
    "class": "5-Г",
    "subject": "Основи християнської етики",
    "code": "jekn3l6j"
  },
  {
    "id": 378,
    "class": "5-Г",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "hiu6vqwk"
  },
  {
    "id": 379,
    "class": "5-Г",
    "subject": "Фізична культура",
    "code": "h65b5cy6"
  },
  {
    "id": 380,
    "class": "5-Г",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "tnnodctk"
  },
  {
    "id": 381,
    "class": "5-Г",
    "subject": "Логіка",
    "code": "rc5xfacr"
  },
  {
    "id": 382,
    "class": "5-Г",
    "subject": "Мистецтво",
    "code": "4zfkp324"
  },
  {
    "id": 383,
    "class": "5-Г",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "khyk2xv3"
  },
  {
    "id": 384,
    "class": "5-Г",
    "subject": "Інформатика (Гр. 1)",
    "code": "x5zozq4p"
  },
  {
    "id": 385,
    "class": "5-Г",
    "subject": "Інформатика (Гр. 2)",
    "code": "4ulvkxxc"
  },
  {
    "id": 386,
    "class": "5-Г",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "bx427fvd"
  },
  {
    "id": 387,
    "class": "5-Г",
    "subject": "Англійська мова (Гр. 1)",
    "code": "nkwljf4u"
  },
  {
    "id": 388,
    "class": "5-Г",
    "subject": "Англійська мова (Гр. 2)",
    "code": "svmbgqaw"
  },
  {
    "id": 389,
    "class": "5-Г",
    "subject": "Математика",
    "code": "e6avrhul"
  },
  {
    "id": 390,
    "class": "5-Г",
    "subject": "Пізнаємо природу",
    "code": "54kr6v4q"
  },
  {
    "id": 391,
    "class": "5-Г",
    "subject": "Вступ до історії України",
    "code": "ugmiuhpz"
  },
  {
    "id": 392,
    "class": "5-Г",
    "subject": "Зарубіжна література",
    "code": "slowwj6z"
  },
  {
    "id": 393,
    "class": "5-Г",
    "subject": "Українська література",
    "code": "4ddfgha6"
  },
  {
    "id": 394,
    "class": "5-Г",
    "subject": "Українська мова",
    "code": "l42qo7hv"
  },
  {
    "id": 395,
    "class": "5-В",
    "subject": "Основи християнської етики",
    "code": "oilreebx"
  },
  {
    "id": 396,
    "class": "5-В",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "q5atlvvw"
  },
  {
    "id": 397,
    "class": "5-В",
    "subject": "Фізична культура",
    "code": "dkrecoc3"
  },
  {
    "id": 398,
    "class": "5-В",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "pziyrqvr"
  },
  {
    "id": 399,
    "class": "5-В",
    "subject": "Логіка",
    "code": "p2w4kbes"
  },
  {
    "id": 400,
    "class": "5-В",
    "subject": "Мистецтво",
    "code": "ycoqhz2d"
  },
  {
    "id": 401,
    "class": "5-В",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "32eccjih"
  },
  {
    "id": 402,
    "class": "5-В",
    "subject": "Інформатика (Гр. 1)",
    "code": "t6t7yopw"
  },
  {
    "id": 403,
    "class": "5-В",
    "subject": "Інформатика (Гр. 2)",
    "code": "gfj6dbbd"
  },
  {
    "id": 404,
    "class": "5-В",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "3fqdapto"
  },
  {
    "id": 405,
    "class": "5-В",
    "subject": "Англійська мова (Гр. 1)",
    "code": "ssfmejyn"
  },
  {
    "id": 406,
    "class": "5-В",
    "subject": "Англійська мова (Гр. 2)",
    "code": "yj22cgzm"
  },
  {
    "id": 407,
    "class": "5-В",
    "subject": "Математика",
    "code": "y7nbbpd7"
  },
  {
    "id": 408,
    "class": "5-В",
    "subject": "Пізнаємо природу",
    "code": "pkw2cl7l"
  },
  {
    "id": 409,
    "class": "5-В",
    "subject": "Вступ до історії України",
    "code": "lbfdaspy"
  },
  {
    "id": 410,
    "class": "5-В",
    "subject": "Зарубіжна література",
    "code": "ey54jvki"
  },
  {
    "id": 411,
    "class": "5-В",
    "subject": "Українська література",
    "code": "g6aqm74q"
  },
  {
    "id": 412,
    "class": "5-В",
    "subject": "Українська мова",
    "code": "knp3uegt"
  },
  {
    "id": 413,
    "class": "5-Б",
    "subject": "Українська мова",
    "code": "qqkmypdv"
  },
  {
    "id": 414,
    "class": "5-Б",
    "subject": "Українська література",
    "code": "2gim24a5"
  },
  {
    "id": 415,
    "class": "5-Б",
    "subject": "Зарубіжна література",
    "code": "qagqf5g7"
  },
  {
    "id": 416,
    "class": "5-Б",
    "subject": "Вступ до історії України",
    "code": "g7anvqxy"
  },
  {
    "id": 417,
    "class": "5-Б",
    "subject": "Пізнаємо природу",
    "code": "zagtokbj"
  },
  {
    "id": 418,
    "class": "5-Б",
    "subject": "Математика",
    "code": "wjkgtwu4"
  },
  {
    "id": 419,
    "class": "5-Б",
    "subject": "Англійська мова (Гр. 2)",
    "code": "76fqp2q6"
  },
  {
    "id": 420,
    "class": "5-Б",
    "subject": "Англійська мова (Гр. 1)",
    "code": "q5e4y6mf"
  },
  {
    "id": 421,
    "class": "5-Б",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "i24k73ed"
  },
  {
    "id": 422,
    "class": "5-Б",
    "subject": "Інформатика (Гр. 2)",
    "code": "5od47zdg"
  },
  {
    "id": 423,
    "class": "5-Б",
    "subject": "Інформатика (Гр. 1)",
    "code": "hg63urrb"
  },
  {
    "id": 424,
    "class": "5-Б",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "kv45pyer"
  },
  {
    "id": 425,
    "class": "5-Б",
    "subject": "Мистецтво",
    "code": "toizd3y4"
  },
  {
    "id": 426,
    "class": "5-Б",
    "subject": "Логіка",
    "code": "pdpu3m6k"
  },
  {
    "id": 427,
    "class": "5-Б",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "6sxmv7df"
  },
  {
    "id": 428,
    "class": "5-Б",
    "subject": "Фізична культура",
    "code": "xzhjtpgb"
  },
  {
    "id": 429,
    "class": "5-Б",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "ohg74obi"
  },
  {
    "id": 430,
    "class": "5-Б",
    "subject": "Основи християнської етики",
    "code": "dbsrquhh"
  },
  {
    "id": 431,
    "class": "6-А",
    "subject": "Основи християнської етики",
    "code": "7ut2mxbn"
  },
  {
    "id": 432,
    "class": "6-А",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "ogdyff4i"
  },
  {
    "id": 433,
    "class": "6-А",
    "subject": "Логіка",
    "code": "vum7sobq"
  },
  {
    "id": 434,
    "class": "6 Екстернат",
    "subject": "Навчальний курс",
    "code": "usxmk6ar"
  },
  {
    "id": 435,
    "class": "6-А",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "prnx4uld"
  },
  {
    "id": 436,
    "class": "6-А",
    "subject": "Мистецтво",
    "code": "m7y6wz4j"
  },
  {
    "id": 437,
    "class": "6-А",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "a2m52gmp"
  },
  {
    "id": 438,
    "class": "6-А",
    "subject": "Физична культура",
    "code": "rrpfjiue"
  },
  {
    "id": 439,
    "class": "6-А",
    "subject": "Інформатика (Гр. 2)",
    "code": "ch2i6q3i"
  },
  {
    "id": 440,
    "class": "6-А",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "odfpmkx4"
  },
  {
    "id": 441,
    "class": "6-А",
    "subject": "Інформатика (Гр. 1)",
    "code": "kc4sb5hr"
  },
  {
    "id": 442,
    "class": "6-А",
    "subject": "Пізнаємо природу",
    "code": "n772b7mg"
  },
  {
    "id": 443,
    "class": "6-А",
    "subject": "Зарубіжна література",
    "code": "5mgbatvt"
  },
  {
    "id": 444,
    "class": "6-А",
    "subject": "Географія",
    "code": "euegafxk"
  },
  {
    "id": 445,
    "class": "6-А",
    "subject": "Історія України. Всесвітня історія",
    "code": "6pyfbj23"
  },
  {
    "id": 446,
    "class": "6-А",
    "subject": "Українська література",
    "code": "sbqkdtpb"
  },
  {
    "id": 447,
    "class": "6-А",
    "subject": "Англійська мова (Гр. 1)",
    "code": "zm5ewb3i"
  },
  {
    "id": 448,
    "class": "6-А",
    "subject": "Англійська мова (Гр. 2)",
    "code": "f6j7inqh"
  },
  {
    "id": 449,
    "class": "6-А",
    "subject": "Українська мова",
    "code": "4loopmxf"
  },
  {
    "id": 450,
    "class": "6-А",
    "subject": "Математика",
    "code": "ezyf5y4w"
  },
  {
    "id": 451,
    "class": "5-А",
    "subject": "Друга мова (Польська) (Гр. 2)",
    "code": "adktkee5"
  },
  {
    "id": 452,
    "class": "5-А",
    "subject": "Друга мова (Польська) (Гр. 1)",
    "code": "6maw76aq"
  },
  {
    "id": 453,
    "class": "5-А",
    "subject": "Логіка",
    "code": "dxxajg23"
  },
  {
    "id": 454,
    "class": "5-А",
    "subject": "Основи християнської етики",
    "code": "47rjwx6v"
  },
  {
    "id": 455,
    "class": "5-А",
    "subject": "Фізична культура",
    "code": "xaau6in4"
  },
  {
    "id": 456,
    "class": "5-А",
    "subject": "Мистецтво",
    "code": "4wksmzua"
  },
  {
    "id": 457,
    "class": "5-А",
    "subject": "Технології (Трудове) (Гр. 2)",
    "code": "xsotp4vg"
  },
  {
    "id": 458,
    "class": "5-А",
    "subject": "Технології (Трудове) (Гр. 1)",
    "code": "wyqlpkfh"
  },
  {
    "id": 459,
    "class": "5-А",
    "subject": "Здоров’я, безпека та добробут",
    "code": "uvupuzln"
  },
  {
    "id": 460,
    "class": "5-А",
    "subject": "Інформатика (Гр. 2)",
    "code": "sotkjk2q"
  },
  {
    "id": 461,
    "class": "5-А",
    "subject": "Інформатика (Гр. 1)",
    "code": "54dqlhh7"
  },
  {
    "id": 462,
    "class": "5-А",
    "subject": "Вступ до історії України",
    "code": "psulftjs"
  },
  {
    "id": 463,
    "class": "5-А",
    "subject": "Пізнаємо природу",
    "code": "dosxnpq7"
  },
  {
    "id": 464,
    "class": "5-А",
    "subject": "Математика",
    "code": "mshroy77"
  },
  {
    "id": 465,
    "class": "5-А",
    "subject": "Англійська мова (Гр. 2)",
    "code": "3q3vo7kf"
  },
  {
    "id": 466,
    "class": "5-А",
    "subject": "Англійська мова (Гр. 1)",
    "code": "jxns74y3"
  },
  {
    "id": 467,
    "class": "5-А",
    "subject": "Зарубіжна література",
    "code": "6nn5wszx"
  },
  {
    "id": 468,
    "class": "5-А",
    "subject": "Українська література",
    "code": "2ujuchp5"
  },
  {
    "id": 469,
    "class": "5-А",
    "subject": "Українська мова",
    "code": "hmsty2nk"
  },
  {
    "id": 470,
    "class": "5 Екстернат",
    "subject": "Навчальний курс",
    "code": "n3tq4v7f"
  },
  {
    "id": 471,
    "class": "4-Г",
    "subject": "Інформатика",
    "code": "daqneu5m"
  },
  {
    "id": 472,
    "class": "4-А",
    "subject": "Англійська мова",
    "code": "ligducad"
  },
  {
    "id": 473,
    "class": "4-Г",
    "subject": "Навчальний курс",
    "code": "nnptrayk"
  },
  {
    "id": 474,
    "class": "4-В",
    "subject": "Інформатика",
    "code": "t5exnjo2"
  },
  {
    "id": 475,
    "class": "4-В",
    "subject": "Англійська мова",
    "code": "e73hzi75"
  },
  {
    "id": 476,
    "class": "4-В",
    "subject": "Навчальний курс",
    "code": "jr2h7azs"
  },
  {
    "id": 477,
    "class": "4-Б",
    "subject": "Інформатика",
    "code": "es4f25rj"
  },
  {
    "id": 478,
    "class": "4-Б",
    "subject": "Англійська мова",
    "code": "hpaelj7w"
  },
  {
    "id": 479,
    "class": "4-Б",
    "subject": "Навчальний курс",
    "code": "yjmxljnr"
  },
  {
    "id": 480,
    "class": "4-А",
    "subject": "Інформатика",
    "code": "tiigvwr4"
  },
  {
    "id": 481,
    "class": "4-Г",
    "subject": "Англійська мова",
    "code": "gcmasw2s"
  },
  {
    "id": 482,
    "class": "4-А",
    "subject": "Навчальний курс",
    "code": "fybgownv"
  },
  {
    "id": 483,
    "class": "2-В",
    "subject": "Англійська мова",
    "code": "hn7yaluh"
  },
  {
    "id": 484,
    "class": "3 Екстернат",
    "subject": "Навчальний курс",
    "code": "nnpyia5c"
  },
  {
    "id": 485,
    "class": "3-Г",
    "subject": "Інформатика",
    "code": "gqkv4nsg"
  },
  {
    "id": 486,
    "class": "3-Г",
    "subject": "Англійська мова",
    "code": "xpdjglfl"
  },
  {
    "id": 487,
    "class": "3-Г",
    "subject": "Навчальний курс",
    "code": "bj5yrlo3"
  },
  {
    "id": 488,
    "class": "3-В",
    "subject": "Інформатика",
    "code": "frsm7lju"
  },
  {
    "id": 489,
    "class": "3-В",
    "subject": "Англійська мова",
    "code": "p4zk3ex4"
  },
  {
    "id": 490,
    "class": "3-В",
    "subject": "Навчальний курс",
    "code": "yhz7rvjn"
  },
  {
    "id": 491,
    "class": "3-Б",
    "subject": "Інформатика",
    "code": "n3pjkrre"
  },
  {
    "id": 492,
    "class": "3-Б",
    "subject": "Англійська мова",
    "code": "my5lik2d"
  },
  {
    "id": 493,
    "class": "3-Б",
    "subject": "Навчальний курс",
    "code": "vt5vcb7o"
  },
  {
    "id": 494,
    "class": "3-А",
    "subject": "Інформатика",
    "code": "ixahkxvg"
  },
  {
    "id": 495,
    "class": "3-А",
    "subject": "Англійська мова",
    "code": "jccj3hbe"
  },
  {
    "id": 496,
    "class": "3-А",
    "subject": "Навчальний курс",
    "code": "alp6qydy"
  },
  {
    "id": 497,
    "class": "4 Екстернат",
    "subject": "Навчальний курс",
    "code": "2cer4n6y"
  },
  {
    "id": 498,
    "class": "2-Г",
    "subject": "Англійська мова",
    "code": "mwfdvbmf"
  },
  {
    "id": 499,
    "class": "2-В",
    "subject": "Навчальний курс",
    "code": "r5cpxctc"
  },
  {
    "id": 500,
    "class": "2-Г",
    "subject": "Навчальний курс",
    "code": "i3rhwdbk"
  },
  {
    "id": 501,
    "class": "2-Б",
    "subject": "Англійська мова",
    "code": "n6uin6cj"
  },
  {
    "id": 502,
    "class": "2-А",
    "subject": "Навчальний курс",
    "code": "fbeqkusg"
  },
  {
    "id": 503,
    "class": "2-А",
    "subject": "Англійська мова",
    "code": "diry3mv4"
  },
  {
    "id": 504,
    "class": "2-Б",
    "subject": "Навчальний курс",
    "code": "wowo4efg"
  },
  {
    "id": 505,
    "class": "1-Г",
    "subject": "НУШ",
    "code": "d2t4b7e2"
  },
  {
    "id": 506,
    "class": "1-Г",
    "subject": "Англійська мова",
    "code": "5gwqug66"
  },
  {
    "id": 507,
    "class": "1 Екстернат",
    "subject": "Навчальний курс",
    "code": "rfo2ehci"
  },
  {
    "id": 508,
    "class": "2 Екстернат",
    "subject": "Навчальний курс",
    "code": "7ykmsj5c"
  },
  {
    "id": 509,
    "class": "1-В",
    "subject": "НУШ",
    "code": "ebdtdxrd"
  },
  {
    "id": 510,
    "class": "1-Б",
    "subject": "НУШ",
    "code": "irtp7xvr"
  },
  {
    "id": 511,
    "class": "1-Б",
    "subject": "Англійська мова",
    "code": "hz5ckbhb"
  },
  {
    "id": 512,
    "class": "1-А",
    "subject": "Англійська мова",
    "code": "wrzoqyn4"
  },
  {
    "id": 513,
    "class": "1-А",
    "subject": "НУШ",
    "code": "xpb4tyhm"
  }
];
