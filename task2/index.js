// Завдання No2. Створити повідомлення
// Напишіть функцію showNotification(options) , яка створює повідомлення: <div
// class="notification"> із заданим вмістом. Повідомлення має автоматично зникнути
// через 1,5 секунди.
// Приклад об'єкта options :
// // Показує елемент з текстом "Hello" поруч із правою верхньою частиною
// вікна.
// showNotification ({
// top : 10 , // 10px від верхньої межі вікна (за замовчуванням 0px)
// right : 10 , // 10px від правого краю вікна (за замовчуванням 0px)
// html : "Hello!" , // HTML-повідомлення
// className : "welcome" // Додатковий клас для div (необов'язково)
// });

function showNotification(params) {
  let div = document.createElement("div");
  div.classList.add("notification");

  for (const param of Object.entries(params)) {
    // console.log(param);
    // console.log(param[0]);
    // console.log(typeof param[1]);
    switch (param[0]) {
      case "html":
        div.textContent = param[1];
        break;
      case "className":
        div.classList.add(param[1]);
        break;
      default:
        div.style[`${param[0]}`] = `${param[1]}`;
        break;
    }
    if (typeof param[1] === "number") {
      div.style[`${param[0]}`] = `${param[1]}px`;
    }
  }
  document.body.append(div);

  setTimeout(() => div.remove(), 1500);
}

showNotification({
  top: 10, // 10px від верхньої межі вікна (за замовчуванням 0px)
  left: 10, // 10px від правого краю вікна (за замовчуванням 0px)
  html: "Hello!", // HTML-повідомлення
  className: "welcome", // Додатковий клас для div (необов'язково)
  backgroundColor: "red",
  position: "absolute",
  fontSize: 26,
  width: 80,
});
