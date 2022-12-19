// Объект пользователя
let user = {
  name: "Джон",
  age: 30,
};

//
let user = {
  name: "Джон",
  age: 30,
};
user.sayHi = function () {
  alert("Привет!");
};
user.sayHi(); // Привет!

// SAME AS ABOVE:
let user = {
  // ...
};
// сначала объявляем
function sayHi() {
  alert("Привет!");
}
// затем добавляем в качестве метода
user.sayHi = sayHi;
user.sayHi(); // Привет!

//

// эти объекты делают одно и то же (одинаковые методы)
user = {
  sayHi: function () {
    alert("Привет");
  },
};
// сокращённая запись:
user = {
  sayHi() {
    // то же самое, что и "sayHi: function()"
    alert("Привет");
  },
};

//

let user = {
  name: "Джон",
  age: 30,
  sayHi() {
    // this - это "текущий объект"
    alert(this.name);
  },
};
user.sayHi(); // Джон
// SAME AS ABOVE:
let user = {
  name: "Джон",
  age: 30,
  sayHi() {
    alert(user.name); // используем переменную "user" вместо ключевого слова "this"
  },
};

//

let user = {
  name: "Джон",
  age: 30,
  sayHi() {
    alert(user.name); // приведёт к ошибке
  },
};
let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект
// Если мы используем this.name вместо user.name внутри alert , тогда этот код будет работать.

let user = { name: "Джон" };
let admin = { name: "Админ" };
function sayHi() {
  alert(this.name);
}
// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;
// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон (this == user)
admin.f(); // Админ (this == admin)
admin["f"](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)
//при вызове obj.f() значение this внутри f равно obj . Так что, в приведённом примере это user или admin .

//

let user = {
  name: "Джон",
  hi() {
    alert(this.name);
  },
  bye() {
    alert("Пока");
  },
};
user.hi(); // Джон (простой вызов метода работает хорошо)
// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!

//
let user = {
  name: "Джон",
  hi() {
    alert(this.name);
  },
};
// разделим получение метода объекта и его вызов в разных строках
let hi = user.hi;
hi(); // Ошибка, потому что значением this является undefined

//
// У стрелочных функций нет «this»
let user = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};
user.sayHi(); // Илья

//
let user = {
  name: "Джон",
  go: function () {
    alert(this.name);
  },
};
user.go(); // Джон

//

let obj, method;
obj = {
  go: function () {
    alert(this);
  },
};
obj.go(); // (1) [object Object]
obj.go(); // (2) [object Object]
(method = obj.go)(); // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

//
function makeUser() {
  return {
    name: "Джон",
    ref: this,
  };
}
let user = makeUser();
alert(user.ref.name); // Error: Cannot read property 'name' of undefined

//
function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    },
  };
}
let user = makeUser();
alert(user.ref().name); // Джон

//calculator
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?, 0");
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// ladder (лестница)
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
  },
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

//SAME AS ABOVE:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};
ladder.up().up().down().showStep(); // 1
ladder.up().up().down().up().down().showStep(); // 1
