// Завдання No17. Запитання користувачеві
// 1. Запитати користувача 10 чисел
// 2. Якщо число
// - Позитивне -> нічого не робити
// - негативна -> отримати їх суму
// 3. Вивести суму негативних чисел, які запровадив користувач
// ВАЖЛИВО: за умовами завдання у вашому коді має бути лише 1 prompt та
// тільки 1 цикл for

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
    if (number < 1) {
      sum += number;
    }
  }
  return sum;
}
console.log(sumInput());
