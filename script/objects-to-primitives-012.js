// Преобразование к примитивам
// "string"

// вывод
alert(obj);
// используем объект в качестве имени свойства
anotherObj[obj] = 123;

// "number"
// явное преобразование
let num = Number(obj);
// математическое (исключая бинарный оператор "+")
let n = +obj; // унарный плюс
let delta = date1 - date2;

// сравнения больше/меньше
let greater = user1 > user2;

// "default"
// бинарный плюс
let total = car1 + car2;
// obj == string/number/symbol
if (user == 1) {
  `...`;
}

// Symbol.toPrimitive:
obj[Symbol.toPrimitive] = function (hint) {
  // должен вернуть примитивное значение
  // hint равно чему-то одному из: "string", "number" или "default"
};

//
let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};
// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// Методы toString/valueOf:
// SAME AS ABOVE:
let user = {
  name: "John",
  money: 1000,
  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },
  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  },
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

//

let obj = {
  // toString обрабатывает все преобразования в случае отсутствия других методов
  toString() {
    return "2";
  },
};
alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его чис

//
let obj = {
  toString() {
    return "2";
  },
};
alert(obj + 2); // 22 (преобразование к примитиву вернуло строку => конкатенация)
