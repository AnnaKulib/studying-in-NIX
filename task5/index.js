// Завдання No 5. Скопіювати та відсортувати масив
// Ми маємо масив рядків arr. Потрібно отримати відсортовану копію, але залишити arr
// незміненим.
// Створіть функцію copySorted(arr), яка повертатиме таку копію.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert (sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)

function copySorted(arr) {
  return [...arr].sort((a, b) => a.localeCompare(b));
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без змін)
