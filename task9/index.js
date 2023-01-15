// Завдання No9. Виділити число
// Є вартість у вигляді рядка "$120". Тобто спочатку йде знак валюти, а потім число.
// Створіть функцію extractCurrencyValue(str ), яка з такого рядка виділятиме числове
// значення і повертатиме його.
// Наприклад:
// alert(extractCurrencyValue ('$120') === 120); // true

// Найочевидніше рішення:
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$120"));
// ----------------------------------------------
// Але воно мені не подобається, бо символів може бути >1.
// Така умова повинна вирішуватись за допомогою регулярного виразу
// Або
// ----------------------------------------------
// function extractCurrencyValue(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       let res = str.slice(i);
//       // -------- or --------
//       // let res = str.substring(i);
//       return res;
//     }
//   }
// }
// console.log(extractCurrencyValue("$$120"));

// ------------- or ---------------
// function extractCurrencyValue(str) {
//   let strArr = str.split("");
//   console.log(strArr);
//   for (let i of strArr) {
//     if (i === "/^[0-9]+$/") {
//       continue;
//     } else {
//       strArr.splice(i, 1);
//     }
//   }
//   let res = strArr.slice(1, strArr.length).join("");
//   let num = parseInt(res);
//   console.log(typeof num);
// }

// extractCurrencyValue("$USD120");

// ----------- or --------------------------------
// function extractCurrencyValue(str) {
//   let numEl = "";
//   for (let i in str) {
//     if (parseInt(str[i]) || str[i] == 0) {
//       numEl += str[i];
//     }
//   }
//   let res = parseInt(numEl);
//   console.log(res);
//   console.log(typeof res);
// }
// extractCurrencyValue("$$120021$$");
