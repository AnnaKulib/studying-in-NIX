// Завдання No6. Властивість nodeType
// Що виведе код? Та чому?
// <html>
// <body>
// <script>
// alert(document.body.lastChild.nodeType);
// </script>
// </body>
// </html>

console.log(document.body.lastChild.nodeType);
// повертає 1. При виконанні скрипта останнім DOM-вузлом є <script>
// Браузер виконує scrypt до того, як обробляє решту сторінки
