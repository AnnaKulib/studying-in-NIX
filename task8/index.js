// Завдання No8. Усічення рядка
// Створіть функцію truncate(str , maxlength), яка перевіряє довжину рядка str і, якщо вона
// перевершує maxlength, замінює кінець str на "...", так, щоб її довжина дорівнювала
// maxlength .
// Результатом функції має бути той самий рядок, якщо усічення не потрібно, або, якщо
// необхідно, усічений рядок.
// Наприклад:
// truncate ( "Ось що мені хотілося б сказати на цю тему:", 20) = "Ось що мені хотіло ..."
// truncate ( "Усім привіт!", 20) = "Усім привіт!"

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength) + "...";
//   }
//   return str;
// }

// console.log(truncate("123456789012345678901", 20));

// --------------- or v2 ------------------------------
// function truncate(str, maxlength) {
//   let result;
//   if (str.length <= maxlength) {
//     result = str;
//   } else {
//     result = str.substring(0, maxlength) + "...";
//   }
//   return result;
// }

// Оскільки умова одна, можна використати тернарний оператор:
// function truncate(str, maxlength) {
//   let result = str;
//   str.length > maxlength
//     ? (result = str.slice(0, maxlength) + "...")
//     : (result = str);

//   return result;
// }
// function truncate(str, maxlength) {
//   let result = str;
//   str.length > maxlength
//     ? (result = str.substring(0, maxlength) + "...")
//     : (result = str);

//   return result;
// }
