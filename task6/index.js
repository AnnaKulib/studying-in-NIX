// Завдання No6. Розташуйте нотатку всередині елемента (абсолютне
//     позиціонування)
//     Удосконаліть рішення попереднього завдання : навчіть функцію positionAt(anchor ,
//     position , elem ) вставляти elem всередину anchor .

//     Нові значення для аргументу position :
//     • top-out , right-out , bottom-out – працюють так само, як раніше, вони вставляють
//     elem зверху/праворуч/знизу anchor .
//     • top-in , right-in , bottom-in – вставляють elem всередину anchor : приклеюють його
//     до верхнього/правого/нижнього краю.
//     Наприклад:
//     // показує замітку поверх цитати
//     positionAt(blockquote , " top - out " , note );
//     // показує нотатку всередині цитати поблизу верхнього краю елемента
//     positionAt(blockquote , "top-in" , note );

function positionAt(anchor, position, elem) {
  elem.style.position = "absolute";
  let coords = anchor.getBoundingClientRect();
  switch (position) {
    case "top-out":
      elem.style.top = `${coords.top - elem.offsetHeight}px`;
      elem.style.left = `${coords.left}px`;
      break;
    case "right-out":
      elem.style.top = `${coords.top}px`;
      elem.style.left = `${coords.right}px`;
      break;
    case "bottom-out":
      elem.style.top = `${coords.top + anchor.offsetHeight}px`;
      elem.style.left = `${coords.left}px`;
      break;
    case "top-in":
      elem.style.top = `${coords.top}px`;
      elem.style.left = `${coords.left}px`;
      break;
    case "right-in":
      elem.style.top = `${coords.top}px`;
      elem.style.left = `${coords.right - elem.offsetWidth}px`;
      break;
    case "bottom-in":
      elem.style.top = `${
        coords.top + anchor.offsetHeight - elem.offsetHeight
      }px`;
      elem.style.left = `${coords.left}px`;
      break;
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

let blockquote = document.querySelector("blockquote");

showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "top-in", "note top-in");
