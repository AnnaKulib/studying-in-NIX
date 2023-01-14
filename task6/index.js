// Завдання No6. Зробити перший символ великим
// Напишіть функцію ucFirst( str ), яка повертає рядок str із великим першим символом.
// Наприклад:
// ucFirst (" вася ") == "Вася";

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("qwerty"));

// ---------- or -----------------

// function ucFirst(str) {
//   const letters = str.split("");
//   console.log(letters);
//   letters[0] = letters[0].toUpperCase();
//   return letters.join("");
// }

// console.log(ucFirst("qwerty"));
