// Завдання No10. Додати кнопку закриття
// Є список повідомлень.
// За допомогою JavaScript для кожного повідомлення додайте у верхній правий кут кнопку
// закриття.

let panes = document.querySelectorAll(".pane");

panes.forEach((pane) => {
  pane.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  pane.firstChild.addEventListener("click", () => pane.remove());
});
