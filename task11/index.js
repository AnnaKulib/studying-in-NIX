// Завдання No 11. Фільтрування унікальних елементів масиву
// Допустимо, у нас є масив arr.
// Створіть функцію unique(arr), яка поверне масив унікальних значень масиву arr, що не
// повторюються.
// Наприклад:
// function unique(arr) {
// /* ваш код */
// }
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
// alert(unique(values)); // Hare,Krishna,:-O
// PS Тут ми використовуємо рядки, але значення може бути будь-якого типу.
// PPS Використовуйте Set для збереження унікальних значень.

function unique(arr) {
  let mySet = new Set(arr);
  return Array.from(mySet);
}
console.log(unique(values));
