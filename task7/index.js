// Завдання No7. Тег у коментарі

// Що виведе код?
// <script>
// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert( body.firstChild.data ); //?
// </script>

//Виведе BODY
// body.firstChild виводить коментар, як єдиний дочірній вузел
// data повертає вміст,
// а властивість .tagName виводить його в верхньому регістрі
