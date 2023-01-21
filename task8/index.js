// Завдання No8 . Де у DOM- ієрархії "document"?
// Дайте відповіді на запитання:
// 1. Об'єктом якого класу є document?
// 2. Яке місце він посідає у DOM-ієрархії?
// 3. Чи успадковує він від Node чи від Element, чи може від HTMLElement?

console.dir(document);
// екземпляр класу HTMLDocument
console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
// Коренем ієрархії є EventTarget, від нього успадковується Node, а інші вузли DOM успадкують вже від нього. HTMLDocument - прототіп від DOCUMENT
// від Node
