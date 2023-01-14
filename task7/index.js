// Завдання No7. Перевірка на спам
// Напишіть функцію checkSpam ( str ), яка повертає true, якщо str містить 'viagra ' або
// 'XXX', а інакше false .
// Функція повинна бути нечутлива до регістру :
// checkSpam( 'buy ViAgRA now') == true
// checkSpam( 'free xxxxx ') == true
// checkSpam( "innocent rabbit") == false

function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");
}

console.log(checkSpam("viAgrbnjk nj"));
