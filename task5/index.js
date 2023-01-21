// Завдання No5. Підрахунок нащадків
// Є дерево, структуроване як вкладені списки ul/li.
// Напишіть код, який виведе кожен елемент списку <li>:
// 1. Який у ньому текст (без піддерева)?
// 2. Яка кількість нащадків – всіх вкладених (включаючи глибоко вкладені)?

let arrOfLi = document.querySelectorAll("li");
console.log(arrOfLi);
for (let li of arrOfLi) {
  let content = li.firstChild.data;
  console.log(`У "li" вміст ${content}`);
}

let countLi = arrOfLi.length;
console.log(`Кількість всіх нащадків ${countLi}`);
