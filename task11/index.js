// Завдання No11. Додайте пункт до списку, що випадає

// Є <select>:

// <select id="genres">
// <option value="rock">Рок</option>
// <option value="blues" selected>Блюз</option>
// </select>

// Використовуючи JavaScript:
// 1. Виведіть значення та текст вибраного пункту.
// 2. Додайте пункт: <option value="classic">Класика</option>.
// 3. Зробіть його вибраним.

let selectGenres = document.getElementById("genres");

console.log(
  `значення вибраного пункту: ${selectGenres.value}, текст: ${
    selectGenres.options[selectGenres.selectedIndex].text
  }`
);
// console.log(selectGenres.value);
// console.log(selectGenres.selectedIndex);
selectGenres.insertAdjacentHTML(
  "beforeend",
  '<option value="classic">Класика</option>'
);
selectGenres.value = "classic";
