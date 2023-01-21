// Завдання No9. Очистіть елемент
// Створіть функцію clear(elem), яка видаляє весь вміст із elem.
// <ol id="elem">
// <li>Привет</li>
// <li>Мир</li>
// </ol>
// <script>
// function clear(elem) {
// /* ваш код */
// }
// clear(elem); // Очищає список
// </script>

function clear(elem) {
  return (elem.innerHTML = "");
}
clear(elem);
