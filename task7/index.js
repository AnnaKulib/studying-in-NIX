// Завдання No 7. Трансформувати на масив імен
// Ви маєте масив об'єктів user, і в кожному з них є user.name. Напишіть код, який
// перетворює їх на масив імен.
// Наприклад:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
// let names = /* ... ваш код */
// alert(names); // Вася, Петя, Маша

console.log(users);
function namesArr() {
  let map = new Map(Object.entries(users));
  let names = [];
  console.log(map);
  map.forEach((value) => {
    // console.log(value.name);
    names.push(value.name);
  });
  console.log(names);
}
namesArr();

// --------- or -------------------
// const names = Object.values(users);
// console.log(names);
// let namesArr = [];
// for (let { name } of names) {
//   console.log(name);
//   namesArr.push(name);
// }
// console.log(namesArr);
