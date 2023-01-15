// Завдання No16. Робінзон Крузо
// Ваш місячний дохід - 3333 папуг. Ви хочете купити у мавп пальму за 8000 папуг.
// Обчисліть, за який проміжок часу ви назбираєте на пальму, за умови, що ваші щомісячні
// витрати становлять 1750 папуг.

function calc(income, costs, price) {
  let howLong;
  howLong = Math.ceil(price / (income - costs));
  let balance = Math.abs(price - howLong * (income - costs));
  console.log(howLong + " " + "months");
  alert(
    `Через ${howLong} місяців у Робінзона буде 1 пальма і ${balance} папуг`
  );
}
calc(3333, 1750, 8000);
