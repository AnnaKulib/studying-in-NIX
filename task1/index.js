// Завдання No1. Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize ( str ), яка перетворює рядки виду " my-short-string " на "
// myShortString ".
// Тобто дефіси видаляються, а всі слова після них отримують велику букву.
// Приклади :
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// PS Підказка: використовуйте split, щоб розбити рядок на масив символів, потім
// переробіть все як потрібно і з'єднайте методом join назад.

function camelize(str) {
  let result;
  result = str
    .split("-")
    .map((currentWord, index) =>
      // console.log(index);
      // console.log(word);

      index !== 0
        ? currentWord[0].toUpperCase() + currentWord.slice(1)
        : currentWord
    )
    .join("");
  console.log(result);
}

camelize("list-style-image");
