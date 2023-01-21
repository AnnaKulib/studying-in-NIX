// Завдання No12. Вставте HTML у список
// Напишіть код для вставки <li>2</li><li>3</li> між двома <li>:
// <ul id="ul">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>

let firstLi = document.querySelector("#one");
console.log(firstLi);
firstLi.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
