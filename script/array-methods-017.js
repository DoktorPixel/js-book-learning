// Добавление/удаление элементов
/*arr.push(...items) – добавляет элементы в конец,
arr.pop() – извлекает элемент из конца,
arr.shift() – извлекает элемент из начала,
arr.unshift(...items) – добавляет элементы в начало.*/

// splice
// arr.splice(str)
let arr = ["I", "go", "home"];
delete arr[1]; // удалить "go"
alert(arr[1]); // undefined
// теперь arr = ["I", , "home"];
alert(arr.length); // 3

//arr.splice(index[, deleteCount, elem1, ..., elemN])

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
alert(arr); // осталось ["Я", "JavaScript"]

//
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
alert(arr); // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// splice возвращает массив из удалённых элементов:
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 2 первых элемента
let removed = arr.splice(0, 2);
alert(removed); // "Я", "изучаю" <-- массив из удалённых элементов

// splice также может вставлять элементы без удаления:
let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
alert(arr); // "Я", "изучаю", "сложный", "язык", "JavaScript"

// Отрицательные индексы разрешены
let arr = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);
alert(arr); // 1,2,3,4,5

// slice
// arr.slice([start], [end]);
//
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
alert(arr.slice(-2)); // s,t (копирует с -2 до конца)

//Можно вызвать slice и вообще без аргументов: arr.slice() создаёт копию массива arr

// concat
// arr.concat(arg1, arg2...)

let arr = [1, 2];
// создать массив из: arr и [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

//
let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  length: 1,
};
alert(arr.concat(arrayLike)); // 1,2,[object Object]

// специальное свойство Symbol.isConcatSpreadable
let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
alert(arr.concat(arrayLike)); // 1,2,что-то,ещё

// Перебор: forEach
arr.forEach(function (item, index, array) {
  // ... делать что-то с item
});

// Вызов alert для каждого элемента
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
// вдобавок расскажет и о своей позиции в массиве:
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} имеет позицию ${index} в ${array}`);
});

// Поиск в массиве
//   indexOf/lastIndexOf и includes
/* arr.indexOf(item, from) ищет item , начиная с индекса from , и возвращает
индекс, на котором был найден искомый элемент, в противном случае -1 .
arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
arr.includes(item, from) – ищет item , начиная с индекса from , и возвращает
true , если поиск успешен.  */

let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true

//
const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (должен быть 0, но === проверка на равенство не работает для NaN
alert(arr.includes(NaN)); // true (верно)

// find и findIndex
let result = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});

//Метод arr.find
let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];
let user = users.find((item) => item.id == 1);
alert(user.name); // Вася

//Метод arr.findIndex
// – по сути, то же самое, но возвращает индекс, на котором был
// найден элемент, а не сам элемент, и -1 , если ничего не найдено.

// filter
let results = arr.filter(function (item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});

//
let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter((item) => item.id < 3);
alert(someUsers.length); // 2
alert(someUsers); // [object Object],[object Object]

//Преобразование массива

// map
let result = arr.map(function (item, index, array) {
  // возвращается новое значение вместо элемента
});

//
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6

// sort(fn)
let arr = [1, 2, 15];
// метод сортирует содержимое arr
arr.sort();
alert(arr); // 1, 15, 2
// По умолчанию элементы сортируются как строки

// Чтобы использовать наш собственный порядок сортировки, нам нужно
// предоставить функцию в качестве аргумента arr.sort()

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

//
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [1, 2, 15];
arr.sort(compareNumeric);
alert(arr); // 1, 2, 15 Теперь всё работает как надо

//
[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  alert(a + " <> " + b);
});

//от функции сравнения требуется любое положительное число, чтобы
// сказать «больше», и отрицательное число, чтобы сказать «меньше»
let arr = [1, 2, 15, 0, -1, -5, 10, -3];
arr.sort(function (a, b) {
  return a - b;
});
alert(arr); //-5,-3,-1,0,1,2,10,15

//SAME AS ABOVE:
let arr = [1, 2, 15, 0, -1, -5, 10, -3];
arr.sort((a, b) => a - b);

// reverse
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); // 5,4,3,2,1

// split
// str.split(delim)
let names = "Вася, Петя, Маша";
let arr = names.split(", ");
for (let name of arr) {
  alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}

// У метода split есть необязательный второй числовой аргумент – ограничение
// на количество элементов в массиве.
let arr = "Вася, Петя, Маша, Саша".split(", ", 2);
alert(arr); // Вася, Петя

// Разбивка по буквам
let str = "тест";
alert(str.split("")); // т,е,с,т

// join
// arr.join(glue)
let arr = ["Вася", "Петя", "Маша"];
let str = arr.join(";"); // объединить массив в строку через ;
alert(str); // Вася;Петя;Маша

//reduce/reduceRight
let value = arr.reduce(
  function (previousValue, item, index, array) {
    // ...
  },
  [initial]
);
/*Аргументы:
previousValue – результат предыдущего вызова этой функции, равен initial при
первом вызове (если передан initial ),
item – очередной элемент массива,
index – его индекс,
array – сам массив.
*/

// Тут мы получим сумму всех элементов массива всего одной строкой:
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
//SAME AS ABOVE:
let arr = [1, 2, 3, 4, 5];
// убрано начальное значение (нет 0 в конце)
let result = arr.reduce((sum, current) => sum + current);
alert(result); // 15
// при отсутствии initial в качестве первого значения
// берётся первый элемент массива, а перебор стартует со второго

// Если массив пуст, то вызов reduce
// без начального значения выдаст ошибку
let arr = [];
// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
arr.reduce((sum, current) => sum + current);

arr.reduceRight; // работает аналогично, но проходит по массиву справа налево.

// Array.isArray
alert(typeof {}); // object
alert(typeof []); // тоже object

// Array.isArray(value)
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

// Большинство методов поддерживают «thisArg»
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg - это необязательный последний аргумент

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};
let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// Переведите текст вида border-left-width в borderLeftWidth
/*Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';*/
function camelize(str) {
  return str
    .split("-") // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением п
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

// Фильтрация по диапазону
function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter((item) => a <= item && item <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)

// Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr); // [3, 1]

// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr); // 8,5,2,1,-10
// и наоборот:
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => a - b);
alert(arr); //-10,1,2,5,8

// Скопировать и отсортировать массив
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);

// Создать расширяемый калькулятор:
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map((item) => item.name);
alert(names); // Вася, Петя, Маша

let ages = users.map((item) => item.age);
alert(ages); //25,30,28

// Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [vasya, petya, masha];
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
/*
usersMapped = [
{ fullName: "Вася Пупкин", id: 1 },
{ fullName: "Петя Иванов", id: 2 },
{ fullName: "Маша Петрова", id: 3 }
]
*/
alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

// Отсортировать пользователей по возрасту
function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [vasya, petya, masha];
sortByAge(arr);
// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//Перемешайте массив
// Простым решением может быть:
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
//Есть и другие хорошие способы решить эту задачу. Например
// алгоритм под названием Тасование Фишера — Йетса

// Получить средний возраст
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];
alert(getAverageAge(arr)); // 28

// Оставить уникальные элементы массива
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
alert(unique(strings)); // кришна, харе, :-O
// данное решение подходит только для небольших массивов,
// Далее в главе Map и Set мы увидим, как его оптимизировать.
