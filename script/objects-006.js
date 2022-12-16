let user = new Object(); // синтаксис "конструктор объекта"
let user = {}; // синтаксис "литерал объекта"

let user = {
  // объект
  name: "John", // под ключом "name" хранится значение "John"
  age: 30, // под ключом "age" хранится значение 30
};

// получаем свойства объекта:
alert(user.name); // John
alert(user.age); // 30
//

let user = {
  name: "John",
  age: 30,
  "likes birds": true, // имя свойства из нескольких слов должно быть в кавычках
};

const user = {
  name: "John",
};
user.name = "Pete"; // (*)
alert(user.name); // Pete

/* Может показаться, что строка (*) должна вызвать ошибку, 
но нет, здесь всё в порядке Дело в том, что объявление 
const защищает от изменений только саму переменную user , а не её содержимое. */
//

let user = {};
// присваивание значения свойству
user["likes birds"] = true;
// получение значения свойства
alert(user["likes birds"]); // true
// удаление свойства
delete user["likes birds"];

//
let key = "likes birds";
// то же самое, что и user["likes birds"] = true;
user[key] = true;

//

let user = {
  name: "John",
  age: 30,
};
let key = prompt("Что вы хотите узнать о пользователе?", "name");
// доступ к свойству через переменную
alert(user[key]); // John (если ввели "name")

// Запись «через точку» такого не позволяет:
let user = {
  name: "John",
  age: 30,
};
let key = "name";
alert(user.key); // undefined

//
let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert(bag.apple); // 5, если fruit="apple"

//SAME AS ABOVE:
let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {};
// имя свойства будет взято из переменной fruit
bag[fruit] = 5;

//

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};

//

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...другие свойства
  };
}
let user = makeUser("John", 30);
alert(user.name); // John
// Вместо name:name мы можем написать просто name :
//SAME AS ABOVE:
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age, // то же самое, что и age: age
    // ...
  };
}
//
let user = {
  name, // тоже самое, что и name:name
  age: 30,
};
//
// эти имена свойств допустимы
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
alert(obj.for + obj.let + obj.return); // 6

//
let obj = {
  0: "Тест", // то же самое что и "0": "Тест"
};
// обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
alert(obj["0"]); // Тест
alert(obj[0]); // Тест (то же свойство)

//
let obj = {};
obj.__proto__ = 5; // присвоим число
alert(obj.__proto__); // [object Object], значение - это объект, т.е. не то, что мы ожидали
// присвоение примитивного значения 5 игнорируется.(особенности свойства __proto__)

// Проверка существования свойства, оператор «in»:
let user = {};
alert(user.noSuchProperty === undefined); // true означает "свойства нет"

// "key" in object
let user = { name: "John", age: 30 };
alert("age" in user); // true, user.age существует
alert("blabla" in user); // false, user.blabla не существует

//
let user = { age: 30 };
let key = "age";
alert(key in user); // true, имя свойства было взято из переменной key

//

let obj = {
  test: undefined,
};
alert(obj.test); // выведет undefined, значит свойство не существует?
alert("test" in obj); // true, свойство существует!
//
