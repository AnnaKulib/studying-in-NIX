// Завдання No10. Сума введених чисел
// Напишіть функцію sumInput( ), яка:
// • Просить користувача ввести значення, використовуючи prompt та зберігає їх у
// масив.
// • Закінчує запитувати значення, коли користувач введе не числове значення,
// порожній рядок або натисне «Скасувати».
// • Підраховує та повертає суму елементів масиву.
// PS Нуль 0 – вважається числом, не зупиняйте введення значень під час введення
// «0».

function sumInput() {
  let numbers = [];
  let sum = 0;

  while (true) {
    let input = prompt("Введіть доданки");
    if (input === "" || input === null || !isFinite(input)) break;
    numbers.push(+input);
  }
  console.log(numbers);

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumInput());
