// Завдання No 12. Чи незалежні лічильники?
// Тут ми робимо два лічильники: counter і counter2, використовуючи ту саму функцію
// makeCounter.
// Вони незалежні? Що покаже другий лічильник? 0,1 чи 2,3 чи щось ще?
// function makeCounter() {
// let count = 0;
// return function() {
// return count++; };}
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert (counter ()); // 0
// alert (counter ()); // 1
// alert (counter2 ()); //?
// alert (counter2 ()); //?
