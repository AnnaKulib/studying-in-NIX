// Завдання No11. Створіть список
// Напишіть інтерфейс, щоб створити список.
// Для кожного пункту:
// 1. Запитуйте вміст у користувача за допомогою prompt.
// 2. Створюйте елемент <li> і додайте його до <ul>.
// 3. Процес припиняється, коли користувач натискає Esc або вводить порожній рядок.
// Усі елементи мають створюватися динамічно.
// Якщо користувач вводить HTML-теги – нехай у списку вони показуються як звичайний
// текст.

function createList() {
  let ul = document.createElement("ul");
  document.body.prepend(ul);

  while (true) {
    let itemData = prompt("Введіть вміст");
    console.log(itemData);
    if (!itemData) break;
    let li = document.createElement("li");
    li.textContent = itemData;
    ul.append(li);
  }
}
createList();
