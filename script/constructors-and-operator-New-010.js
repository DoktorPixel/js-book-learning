function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Вася");
alert(user.name); // Вася
alert(user.isAdmin); // false

//SAME AS ABOVE:
function User(name) {
  // this = {}; (неявно)
  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;
  // return this; (неявно)
}

let user = {
  name: "Вася",
  isAdmin: false,
};

// new function() { … }
let user = new (function () {
  this.name = "Вася";
  this.isAdmin = false;
  // ...другой код для создания пользователя
  // возможна любая сложная логика и выражения
  // локальные переменные и т. д.
})();

// Проверка на вызов в режиме конструктора: new.target
function User() {
  alert(new.target);
}
// без "new":
User(); // undefined
// с "new":
new User(); // function User { ... }

//

function User(name) {
  if (!new.target) {
    // в случае, если вы вызвали без оператора new
    return new User(name); // ...добавим оператор new за вас
  }
  this.name = name;
}
let vasya = User("Вася"); // переадресовывает вызовы на new User
alert(vasya.name); // Вася

//Возврат значения из конструктора return

function BigUser() {
  this.name = "Вася";
  return { name: "Godzilla" }; // <-- возвращает этот объект
}
alert(new BigUser().name); // Godzilla, получили этот объект

//
function SmallUser() {
  this.name = "Вася";
  return; // <-- возвращает this
}
alert(new SmallUser().name); // Вася

//

let user = new User(); // <-- без скобок (их дорисовывает притиер)
// то же, что и
let user = new User();

//Создание методов в конструкторе
function User(name) {
  this.name = name;
  this.sayHi = function () {
    alert("Меня зовут: " + this.name);
  };
}
let vasya = new User("Вася");
vasya.sayHi(); // Меня зовут: Вася
/*
vasya = {
name: "Вася",
sayHi: function() { ... }
}
*/

//Две функции - один объект
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
alert(new A() == new B()); // true

//Создание калькулятора при помощи конструктора

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Создаём Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Сколько нужно добавить?", 0);
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

