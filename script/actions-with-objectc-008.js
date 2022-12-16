let user = { name: "Иван" };
let admin = user; // копируется ссылка

//

let user = { name: "Иван" };
let admin = user;
admin.name = "Петя"; // изменено по ссылке из переменной "admin"
alert(user.name); // 'Петя', изменения видны по ссылке из переменной "user"

//
let a = {};
let b = a; // копирование по ссылке
alert(a == b); // true, т.к. обе переменные ссылаются на один и тот же объект
alert(a === b); // true

//

let a = {};
let b = {}; // два независимых объекта
alert(a == b); // false
// Два объекта равны только в том случае, если это один и тот же объект.

//
let user = {
  name: "Иван",
  age: 30,
};
let clone = {}; // новый пустой объект
// скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}
// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = "Пётр"; // изменим в нём данные
alert(user.name); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.

//
// метод Object.assign Синтаксис:
Object.assign(dest, [src1, src2, src3]);

//
let user = { name: "Иван" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "Иван", canView: true, canEdit: true }

//
let user = { name: "Иван" };
Object.assign(user, { name: "Пётр" });
alert(user.name); // теперь user = { name: "Пётр" }

// Мы также можем использовать Object.assign для замены for..in на простое клонирование:
let user = {
  name: "Иван",
  age: 30,
};
let clone = Object.assign({}, user);
// Этот метод скопирует все свойства объекта user в пустой объект и возвратит его.

// Вложенное клонирование:
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50,
  },
};
alert(user.sizes.height); // 182

//

let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = Object.assign({}, user);
alert(user.sizes === clone.sizes); // true, один и тот же объект
// user и clone обращаются к одному sizes
user.sizes.width++; // меняем свойство в одном объекте
alert(clone.sizes.width); // 51, видим результат в другом объекте

/*Для создания «настоящей копии» (полного клона объекта) можно
воспользоваться методом из сторонней JavaScript-библиотеки _.cloneDeep(obj) */
