// Завдання No 8. Відсортувати користувачів за віком
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та
// сортує їх за ним.
// Наприклад:
let vasya = { name: " Вася ", age: 25 };
let petya = { name: " Петя ", age: 30 };
let masha = { name: " Маша ", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// тепер : [ vasya , masha , petya ]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петро

// console.log(arr);

function sortByAge() {
  let valuesArr = Object.values(arr);
  let ages = [];
  //   console.log(valuesArr);
  valuesArr
    .sort((a, b) => a.age - b.age)
    .forEach(({ name }) => ages.push(name));
  console.log(ages);
}
sortByAge();
