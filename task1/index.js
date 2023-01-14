// Завдання No1. Перевірка на пустоту
// Напишіть функцію isEmpty(obj) , яка повертає true , якщо об'єкт не має властивостей,
// інакше false .

let obj = {};
let obj1 = { 1: 2 };
console.log(obj);
console.log(obj1);

function isEmpty(obj) {
  //   ----- array length check v1 -----------
  //   const order = !Object.keys(obj).length;
  //   console.log(order);
  //   ---------------------------------------
  //   ----- or v2 ---------------------------
  //   const order = Object.keys(obj).length === 0;
  //   console.log(order);
  //   ---------------------------------------
  //   ----- or v3 ---------------------------
  //   if (JSON.stringify(obj) == "{}") {
  //     console.log(true);
  //   }
  //   console.log(false);
  //   ---------------------------------------
}

isEmpty(obj);
isEmpty(obj1);

//   ----- or check by the cycle "for" -----------
//   ----- v4 ------------------------------------
// function isEmpty(obj) {
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isEmpty(obj));
// console.log(isEmpty(obj1));
//   ---------------------------------------
//   ----- or v5 ---------------------------
// function isEmpty(obj) {
//   for (let i in obj) {
//     return false;
//   }
//   return true;
// }
// console.log(isEmpty(obj));
// console.log(isEmpty(obj1));
//   ---------------------------------------
