// Завдання No4. Пошук елементів
// Ось документ із таблицею та формою. Як знайти...
// • Таблицю з id="age-table".
// • Всі елементи label всередині цієї таблиці (їх три).
// • Перший td у цій таблиці (зі словом "Age ").
// • Форму form з ім'ям name = "search".
// • Перший input у цій формі.
// • Останній input у цій формі.
// Використовуйте нижченаведений та браузерні інструменти розробника:

let tableById = document.querySelector("#age-table");
let formByName = document.querySelector("form[name='search']");
// Таблицю з id="age-table":
// console.log(document.querySelector("#age-table"));
// Всі елементи label всередині цієї таблиці (їх три):
// console.log(document.querySelectorAll("#age-table label"));
// td у цій таблиці (зі словом "Age "):
// console.log(document.querySelector("#age-table td"));
// console.log(tableById.firstElementChild.firstElementChild.firstElementChild); //жах, але працює
// Форму form з ім'ям name = "search":
// console.log(document.querySelector("form[name='search']"));
// console.log(document.querySelector("form"));
// console.log(document.body.firstElementChild);
// Перший input у цій формі:
// console.log(formByName.firstElementChild.firstElementChild);
// Останній input у цій формі:
// console.log(formByName.lastElementChild);
