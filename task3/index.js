// Завдання No 3 Фільтрування за діапазоном «на місці»
// Напишіть функцію filterRangeInPlace( arr , a, b), яка приймає масив arr і видаляє з нього
// всі значення крім тих, що знаходяться між a та b. Тобто перевірка має вигляд
// a ≤ arr[i] ≤ b.
// Функція повинна змінювати масив, що приймається, і нічого не повертати.
// Наприклад:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
// alert(arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    // console.log(el);
    if (el < a || el > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
