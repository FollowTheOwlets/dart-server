# Сервер для тестировки
 ссылка [link](empty)
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
  res ArrayObjects [{ id, fullname, shortname, img },{...},...]
```

* Получение преподавателя по id
```
  GET /faces/person?id=
  res object
  { id, fullname, shortname, img,...}
```