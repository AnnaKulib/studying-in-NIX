// Завдання No15. Перепишіть за допомогою функції-стрілки
// Замініть код Function Expression стрілочною функцією:
// function ask(question, yes, no) {
// if (confirm(question)) yes( )
// else no( );
// }
// ask (
// "Ви згодні?",
// function ( ) { alert ("Ви погодилися."); },
// function ( ) { alert ("Ви скасували виконання."); }
// );

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Ви згодні?",
  () => {
    alert("Ви погодилися.");
  },
  () => {
    alert("Ви скасували виконання.");
  }
);
