for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

//
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};
for (let key in user) {
  // ключи
  alert(key); // name, age, isAdmin
  // значения ключей
  alert(user[key]); // John, 30, true
}

//

let codes = {
  49: "Германия",
  41: "Швейцария",
  44: "Великобритания",
  // ..,
  1: "США",
};
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}
// Телефонные коды идут в порядке возрастания, потому что они являются целыми числами: 1, 41, 44, 49 .

// Math.trunc - встроенная функция, которая удаляет десятичную часть
alert(String(Math.trunc(Number("49")))); // "49", то же самое ⇒ свойство целочисленное
alert(String(Math.trunc(Number("+49")))); // "49", не то же самое, что "+49" ⇒ свойство не
alert(String(Math.trunc(Number("1.2")))); // "1", не то же самое, что "1.2" ⇒ свойство не

//
let user = {
  name: "John",
  surname: "Smith",
};
user.age = 25; // добавим ещё одно свойство
// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
  alert(prop); // name, surname, age
}

//

let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США",
};
for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}

//exercise

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Проверка на пустоту
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
} //Просто в цикле перебираем свойства объекта и возвращаем false , как только встречаем свойство.

//
const user = {
  name: "John",
};
// Работает!
user.name = "Pete";
// Ошибка
user = 123;

// Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum); // 390
//

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

//
