// Завдання No2 . Фільтрування по діапазону
// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи
// між a та b і віддає масив цих елементів.
// Функція повинна повертати новий масив та не змінювати вихідний.
// Наприклад:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1 (збігаються значення)
// alert(arr); // 5,3,8,1 (без змін)

function filterRange(arr, a, b) {
  let fitleredArr;

  fitleredArr = arr.filter((elem) => elem >= a && elem < b);

  console.log(fitleredArr);
  console.log(arr);
}

let arr = [5, 3, 8, 1, 2, 9];
let filtered = filterRange(arr, 2, 8);

filterRange();
