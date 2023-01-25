// Завдання No8**. Пересуньте м'яч по полю
// Нехай м'яч переміщається при натисканні на поле, туди, куди був клік.
// Вимоги:
// Центр м'яча повинен збігатися з місцем натискання миші (якщо це можливо без
// перетину країв поля);
// CSS -анімація бажана, але не обов'язкова;
// М'яч у жодному разі не повинен перетинати межі поля;
// При прокручуванні сторінки нічого не повинно ламатися;
// Нотатки:
// Код повинен вміти працювати з різними розмірами м'яча та поля, не прив'язуватися до
// будь-яких фіксованих значень.
// Використовуйте властивості event.clientX / event.clientY для визначення координат миші
// при натисканні.

let field = document.getElementById("field");
let ball = document.getElementById("ball");

field.addEventListener("click", (event) => {
  let heightField = field.clientHeight;
  let heightN = field.offsetTop + field.clientTop;
  //   console.log(field.offsetTop, field.clientTop);
  let widthField = field.clientWidth;
  let widthN = field.offsetLeft + field.clientLeft;
  //   console.log(field.offsetLeft, field.clientLeft);
  let y = event.clientY - heightN - ball.offsetHeight / 2;
  let x = event.clientX - widthN - ball.offsetWidth / 2;
  //   console.log(
  //     `heightField:${heightField}, heightN:${heightN}, widthField:${widthField}, widthN:${widthN}, y:${y}, x:${x}`
  //   );

  if (y < 0) y = 0;
  if (x < 0) x = 0;
  if (y > heightField - ball.offsetHeight) y = heightField - ball.offsetHeight;
  if (x > widthField - ball.offsetWidth) x = widthField - ball.offsetWidth;
  ball.style.top = y + "px";
  ball.style.left = x + "px";
});
