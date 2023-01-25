// Завдання No 9. Створити меню, що розкривається.
// Створити меню, яке натискання відкривається або закривається.
// P. S. HTML / CSS вихідного документа можна і потрібно міняти.

let dropdownMenu = document.querySelector(".dropdown");
let dropdownMenuText = document.querySelector(".text");

dropdownMenuText.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});
