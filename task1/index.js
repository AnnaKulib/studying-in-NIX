// Завдання No1. Створіть календар у вигляді таблиці
// Напишіть функцію createCalendar(elem, year, month).
// Виклик функції повинен створити календар для заданого місяця month на рік і вставити
// його в elem.
// Календар має бути таблицею, де тиждень – це <tr>, а день – це <td>. У таблиці має бути
// заголовок із назвами днів тижня, кожен день – <th>, першим днем тижня має бути
// понеділок.
// Наприклад, createCalendar(cal, 2012, 9) згенерує в cal наступний календар:

let cal = document.querySelector("#calendar");
function createCalendar(elem, year, month) {
  // користувач задає місяць числом 1 - 12,а в js місяці ідуть за індексами 0 - 11, тому  month - 1
  let currentDate = new Date(year, month - 1, 1);
  let finalDateOfMonth = new Date(year, month, 0);
  //   console.log(new Date());
  //   console.log(currentDate);
  //   console.log(currentDate.getDate());
  //   console.log(finalDateOfMonth);
  // пошук понеділка. "допоки не понеділок"
  while (currentDate.getDay() != 1) {
    currentDate.setDate(currentDate.getDate() - 1);
  }
  let table = document.createElement("table");
  table.innerHTML =
    "<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>нд</th></tr>";
  while (currentDate <= finalDateOfMonth) {
    let tr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let td = document.createElement("td");
      if (currentDate.getMonth() == month - 1) {
        td.textContent = currentDate.getDate();
      }
      td.textContent = currentDate.getDate();
      tr.append(td);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    table.append(tr);
  }
  elem.append(table);
}

createCalendar(cal, 2023, 2);
