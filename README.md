# Tutorial

`1.` Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

```
node index.js --action="list"
```

![list](https://i.ibb.co/kH2QHt1/list.png)

[подивитися тут](https://ibb.co/7Yt2Yq4)

`2.` Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

```
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```

![get](https://i.ibb.co/HtyL9LT/get.png)

[подивитися тут](https://ibb.co/n7yqKqM)

`3.` Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

```
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```

![add](https://i.ibb.co/TLdwJb2/add.png)

[подивитися тут](https://ibb.co/vYRcfQq)

`4.` Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

```
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

![remove](https://i.ibb.co/JRTDMKw/remove.png)

[подивитися тут](https://ibb.co/rGhD1mR)