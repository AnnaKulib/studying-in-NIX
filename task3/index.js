// Завдання No3. Виділіть ячейки по діагоналі
// Напишіть код, який виділить червоним кольором усі ячейки у таблиці по діагоналі.
// Нумерацію в середині таблиці реалізувати через JS.
// Вам потрібно отримати з таблиці <table> усі діагональні <td> та виділити їх,
// використовуючи код:
// // у змінній td знаходиться DOM-елемент для тега < td >
// td.style.backgroundColor = 'red';

let td = document.querySelector("td");
console.log(td);

let table = document.querySelector("table");
let rows = table.rows;

function fillTable() {
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.background = "red";
    // console.log(rows);
    for (let j = 0; j < rows.length; j++) {
      const element = rows[j];
      // console.log(element);
      element.cells[i].innerHTML = `${i + 1}:${j + 1}`;
    }
  }
}

fillTable();
