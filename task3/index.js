// Ваш код повинен за допомогою DOM отримати чотири пари координат:
// • верхній лівий зовнішній кут (це просто).
// • нижній правий, зовнішній кут (теж просто).
// • верхній лівий, внутрішній кут (трохи складніше).
// • нижній правий, внутрішній кут (є кілька способів, виберіть один).
// Координати, обчислені вами, повинні збігатися з тими, які повертаються на кліку миші.
// P.S. Код повинен працювати, якщо елемент має інші розміри або має рамку, без
// прив'язки до конкретних чисел.

let field = document.querySelector("#field");
let coords = document.querySelector("#coords");
let elem = field.getBoundingClientRect();

document.onclick = function (e) {
  // показує координати точки кліка;
  coords.innerHTML = e.clientX + ":" + e.clientY;
};

let coordsCornerLeftTop = `${elem.left}: ${elem.top}`;
let coordsCornerRightBottom = `${elem.right}: ${elem.bottom}`;
let coordsCornerLeftTopInternal = `${elem.left + field.clientLeft}:
  ${elem.top + field.clientTop}`;
let coordsRightBottomInternal = `${elem.right - field.clientLeft}: 
${elem.bottom - field.clientTop}`;
console.log(coordsCornerLeftTop);
console.log(coordsCornerRightBottom);
console.log(coordsCornerLeftTopInternal);
console.log(coordsRightBottomInternal);
