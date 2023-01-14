// Завдання No5. Випадкове ціле число від min до max
// Напишіть функцію randomInteger( min , max), яка генерує випадкове ціле число від min
// до max (включно).
// Будь-яке число з інтервалу min..max має з'являтися з однаковою ймовірністю .
// Приклад роботи функції:
// alert (randomInteger (1, 5) ); // 1
// alert(randomInteger (1, 5)); // 3

// alert(randomInteger (1, 5)); // 5

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 5));
