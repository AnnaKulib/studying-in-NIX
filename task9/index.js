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
//       let newStr = str.slice(i);
//       // -------- or --------
//       // let newStr = str.substring(i);
//       return newStr;
//     }
//   }
// }
// console.log(extractCurrencyValue("$$120"));

// ----------- or --------------------------------
// function extractCurrencyValue(str) {
//   let numEl = "";
//   for (let i in str) {
//     if (parseInt(str[i]) || str[i] == 0) {
//       numEl += str[i];
//     }
//   }
//   console.log(numEl);
// }

// extractCurrencyValue("$$120021$$");
