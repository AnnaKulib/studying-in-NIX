// Завдання No2. Помножуємо всі числові властивості на 2
// Створіть функцію multiplyNumeric(obj) , яка збільшує всі числові властивості об'єкта obj
// на 2 .
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо
// змінювати об'єкт.
// PS Використовуйте typeof, щоб перевірити, чи значення властивості числове.

let obj = {
  1: 1,
  2: "2",
  3: 2,
  4: 3,
};

console.log(obj);
const arr = Object.entries(obj);
console.log(arr);

// function multiplyNumeric(obj) {
//   for (const [key, value] of Object.entries(obj)) {
//     // console.log(`${key}: ${value}`);

//     if (typeof value === "number") {
//       obj[key] = value * 2;
//       // console.log(value);
//     }

//     // if (!isNaN(value)) {
//     //   console.log(value);
//     // }  не підходить, т.я робить числом строку з цифрою
//   }
//   console.log(obj);
// }

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     // Key
//     // console.log(key);

//     // The property value with this key
//     console.log(obj[key]);

//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
//   console.log(obj);
// }

// multiplyNumeric(obj);
