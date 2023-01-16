// Завдання No 12. Чи незалежні лічильники?
// Тут ми робимо два лічильники: counter і counter2, використовуючи ту саму функцію
// makeCounter.
// Вони незалежні? Що покаже другий лічильник? 0,1 чи 2,3 чи щось ще?
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); //0
console.log(counter2()); //1

// Функції незалежні. counter та counter2 відпрацьовують незалежно один від одної, створюючи свою змінну і опрацьовуючи її, видаючи результат.
