// Завдання No4. Випадкове число від min до max
// Вбудований метод Math.random() повертає випадкове число від 0 (включно) до 1 (але не
// включаючи 1)
// Напишіть функцію random(min , max), яка генерує випадкове число з плаваючою точкою
// від min до max (але не включаючи max).
// Приклад роботи функції:
// alert(random (1, 5)); // 1.2345623452
// alert(random (1, 5)); // 3.7894332423
// alert(random (1, 5)); // 4.3435234525

function random(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(random(1, 5));
