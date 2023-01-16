// Завдання No 13. Об'єкт лічильника
// Тут об'єкт лічильника створено за допомогою функції-конструктора.
// Чи працюватиме він? Що покаже?
function Counter() {
  let count = 0;
  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
let counter = new Counter();
console.log(counter.up()); //1
console.log(counter.up()); //2
console.log(counter.down()); //1

// Функція-конструктор працює, конструкція new створює об'єкт і працює з ним

// function Counter(num) {
//     //   let count = 0;
//     this.up = function () {
//       return ++num;
//     };
//     this.down = function () {
//       return --num;
//     };
//   }
//   let counter = new Counter(2);
//   console.log(counter.up()); //1
//   console.log(counter.up()); //2
//   console.log(counter.down()); //1
