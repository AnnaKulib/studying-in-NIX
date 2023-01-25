// Завдання No4. Покажіть нотатку поруч із елементом
// Створіть функцію positionAt(anchor, position, elem) , яка позиціонує елемент elem
// залежно від значення властивості position поряд з елементом anchor .
// Аргумент position – рядок з одним із 3 значень:
// • "top" - розмістити elem прямо над anchor
// • "right" - розмістити elem безпосередньо праворуч від anchor
// • "bottom" - розмістити elem прямо під anchor

// Вона використовується всередині функції showNote(anchor , position , html) , яка вже є у
// вихідному коді завдання. Вона створює і показує елемент-«примітку» з текстом html на
// заданій позиції position поряд з елементом anchor.

//  Позиціонує елемент elem щодо елемента anchor відповідно до значення position.

//  @param {Node} anchor елемент, біля якого позиціонується інший
// елемент
//  @param {string} position одне з: top/right/bottom
//  @param {Node} elem елемент, який позиціонується
// Обидва елементи elem і anchor повинні бути присутніми у документі
function positionAt(anchor, position, elem) {
  elem.style.position = "fixed";
  let coords = anchor.getBoundingClientRect();
  switch (position) {
    case "top":
      elem.style.top = `${coords.top - elem.offsetHeight}px`;
      elem.style.left = `${coords.left}px`;
      break;
    case "right":
      elem.style.top = `${coords.top}px`;
      elem.style.left = `${coords.right}px`;
      break;
    case "bottom":
      elem.style.top = `${coords.top + anchor.offsetHeight}px`;
      elem.style.left = `${coords.left}px`;
      break;
  }
}
// Показує нотатку із заданим вмістом на заданій позиції Щодо елемента anchor.
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
