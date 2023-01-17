// Завдання No 6. Створити калькулятор, що розширюється .
// Створіть функцію Calculator, яка реалізує функціонал калькулятора.

function calculator(num1, num2, operator) {
  switch (operator) {
    case "*":
      return num1 * num2;
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "не ділиться на нуль";
      }
  }
}

console.log(calculator(2, 0, "/"));

// -------------------------------------------
// помітки для себе:
// В подальшому треба доробити можливість ввода користувачем декількох операцій,
//   let num1 = parseFloat(prompt("Введіть число"));
//   let operator = prompt("Введіть оператор  "+", "-", "*" чи "/"");
//   let num2 = parseFloat(prompt("Введіть число"));
