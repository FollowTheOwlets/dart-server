# Сервер для тестировки
[адрес домена](https://app-dart-server.onrender.com)
### Примеры запросов:

***Авторизация***

* Авторизация пользователя
```
  POST /login
  Body object {login, password}
  res object {token}
  ```

***Вуз в лицах***

* Получение списка всех преподавателей
```
  GET /faces
  res ArrayObjects [
        {
            "id": "...",
            "fullname": "Абля...ич",
            "img": "https://old.spbgasu.ru/upload-f.....jpg"
        },
        {
            "id": "535",
            "fullname": "Абрам...новна",
            "img": null
        },
    ]
```

* Получение списка кафедр с их преподавателями
```
  GET /deps
  res ArrayObjects [
  { 
    "id": "43",
    "title": "Автомобильных дорог, ....",
    "shortTitle": "КАДМТ",
    "phone": "+78123161581",
    "email": "ad@spbgasu.ru",
    "rooms": [
        {
            "room": "601С",
            "housingId": "2",
            "housingColor": "#013A56",
            "location": "https://map.spbgasu.ru..."
        }
    ],
    "socials": "https://vk.com/...",
    "link": "https://www.spbgasu.ru/...",
    "manager": "212",
    "faculty": "Строительный",
    "faces": [
            {
                "id": "...",
                "fullname": "Д....",
                "jobTitle": "старший преподаватель",
                "img": "https://old.spbgasu.ru/up...."
            },
        ] 
    },
  ...
  ]
```

* Получение преподавателя по id
```
  GET /person?id=
  res object
  {
    "id": "10",
    "fullname": "Абля....",
    "firstname": "Ти...",
    "middlename": "Хас....",
    "lastname": "Аб...",
    "cathedra": "69",
    "shortname": "А...",
    "img": "https://old.spbgasu.ru/uplo.....",
    "jobTitle": "доцент к.н., доц.",
    "address": {
        "room": "432Е",
        "housingId": "5",
        "housingColor": "#E0D9B4",
        "location": "https://map.spbgasu.ru/web...."
    },
    "academicDegree": "кандидат экономических наук (2013)",
    "phone": "+78....",
    "email": "es....",
    "teamsLink": "https://teams.microsoft.c....",
    "facesLink": "https://old.spbgasu....",
    "sex": "M",
    "socials": ""
}
```