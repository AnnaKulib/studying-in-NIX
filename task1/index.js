// Завдання No1. Дочірні елементи в DOM
// Для сторінки:
// <html>
// <body>
// <div>Користувачі:</div>
// <ul>
// <li>Джон</li>
// <li>Піт</li>
// </ul>
// </body>
// </html>
// • Напишіть код, який отримає елемент <div>
// • Напишіть код, який отримає елемент <ul>
// • Напишіть код, який отримає другий li ( з ім'ям Піт)

// отримає елемент <div>:
// console.log(document.body.firstElementChild);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[1]);
// console.log(document.querySelector("div"));
//
// отримає елемент <ul>:
// let div = document.querySelector("div");
// console.log(document.querySelector("ul"));
// console.log(document.body.children[1]);
// console.log(div.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.lastElementChild.previousElementSibling);
// console.log(document.body.lastElementChild); // можна було б отримати список ul так,
// звернувшись до нього, як до останнього елемента документа,але в мене останнім іде скрипт

// отримає другий li ( з ім'ям Піт):
// let ul = document.querySelector("ul");
// console.log(ul.lastElementChild);
// console.log(document.body.children[1].lastElementChild);
