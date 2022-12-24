// Объявление

let arr = new Array();
let arr = [];

//
let fruits = ["Яблоко", "Апельсин", "Слива"];

//
let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits[0]); // Яблоко
alert(fruits[1]); // Апельсин
alert(fruits[2]); // Слива

//
fruits[2] = "Груша"; // теперь ["Яблоко", "Апельсин", "Груша"]

//
fruits[3] = "Лимон"; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

//
let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits.length); // 3

//
let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits); // Яблоко, Апельсин, Слива

// В массиве могут храниться элементы любого типа.
// разные типы значений
let arr = [
  "Яблоко",
  { name: "Джон" },
  true,
  function () {
    alert("привет");
  },
];
// получить элемент с индексом 1 (объект) и затем показать его свойство
alert(arr[1].name); // Джон
// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет

//Методы, работающие с концом массива:
// pop:
let fruits = ["Яблоко", "Апельсин", "Груша"];
alert(fruits.pop()); // удаляем "Груша" и выводим его
alert(fruits); // Яблоко, Апельсин

// push:
let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша");
alert(fruits); // Яблоко, Апельсин, Груша

// Методы, работающие с началом массива:
// shift:
let fruits = ["Яблоко", "Апельсин", "Груша"];
alert(fruits.shift()); // удаляем Яблоко и выводим его
alert(fruits); // Апельсин, Груша

// unshift:
let fruits = ["Апельсин", "Груша"];
fruits.unshift("Яблоко");
alert(fruits); // Яблоко, Апельсин, Груша

// Методы push и unshift могут добавлять сразу несколько элементов:
let fruits = ["Яблоко"];
fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");
alert(fruits); // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]

// Массив является объектом и, следовательно, ведёт себя как объект:
let fruits = ["Банан"];
let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
alert(arr === fruits); // true
arr.push("Груша"); // массив меняется по ссылке
alert(fruits); // Банан, Груша - теперь два элемента

// Перебор элементов:
// цикл for по цифровым индексам:
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

// for..of :
let fruits = ["Яблоко", "Апельсин", "Слива"];
// проходит по значениям
for (let fruit of fruits) {
  alert(fruit);
}

// for..in :
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let key in arr) {
  alert(arr[key]); // Яблоко, Апельсин, Груша
}
// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со
// старыми браузерами.
// for (let item of arr) – современный синтаксис только для значений элементов (к
// индексам нет доступа).
// for (let i in arr) – никогда не используйте для массивов!

// length -это не количество элементов массива, а наибольший цифровой индекс +1
let fruits = [];
fruits[123] = "Яблоко";
alert(fruits.length); // 124

//
let arr = [1, 2, 3, 4, 5];
arr.length = 2; // укорачиваем до двух элементов
alert(arr); // [1, 2]
arr.length = 5; // возвращаем length как было
alert(arr[3]); // undefined: значения не восстановились

// самый простой способ очистить массив – это arr.length = 0

// new Array()
let arr = new Array("Яблоко", "Груша", "и тд");

//
let arr = new Array(2); // создастся ли массив [2]?
alert(arr[0]); // undefined! нет элементов.
alert(arr.length); // length 2
// коде, представленном выше, в new Array(number) все элементы равны undefined

// Многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(matrix[1][1]); // 5, центральный элемент

//toString
let arr = [1, 2, 3];
alert(arr); // 1,2,3
alert(String(arr) === "1,2,3"); // true

//
alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"
//SAME AS ABOVE:
alert("" + 1); // "1"
alert("1" + 1); // "11"
alert("1,2" + 1); // "1,21"

//
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert(fruits.length); // 4

//

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

//
let arr = ["a", "b"];
arr.push(function () {
  alert(this);
});
arr[2](); // "a","b",function

// Сумма введённых чисел
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumInput());

// Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) {
    // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }
  return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0

