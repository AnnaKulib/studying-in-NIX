// Завдання No5. Покажіть нотатку біля елемента (абсолютне позиціонування)
// Змініть код рішення попереднього завдання так, щоб елемент нотатки використовував
// властивість position: absolute замість position: fixed.
// Це запобігає розбіжності елементів під час прокручування сторінки.
// Використовуйте рішення попереднього завдання для початку.
// Щоб перевірити рішення в умовах прокручування, додайте стиль елементу <body style =
// "height: 2000px "> .

function positionAt(anchor, position, elem) {
  //   elem.style.position = "fixed";
  elem.style.position = "absolute";
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
