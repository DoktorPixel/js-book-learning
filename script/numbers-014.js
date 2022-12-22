let billion = 1000000000;
//SAME AS ABOVE:
let billion = 1e9; // 1 миллиард, буквально: 1 и 9 нулей
// alert( 7.3e9 ); // 7.3 миллиардов (7,300,000,000)

// 1e3 = 1 * 1000
// 1.23e6 = 1.23 * 1000000

let ms = 0.000001;
//SAME AS ABOVE:
let ms = 1e-6; // шесть нулей, слева от 1

// 1 делится на 1 с 3 нулями
// 1e-3 = 1 / 1000 (=0.001)
// 1.23 делится на 1 с 6 нулями
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)

// Шестнадцатеричные числа
alert(0xff); // 255
alert(0xff); // 255 (то же самое, регистр не имеет значения)

// двоичные и восьмеричные числа , "0b" для двоичных и "0o" для восьмеричных:
let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255
alert(a == b); // true, с двух сторон число 255

// Метод num.toString(base) возвращает строковое представление числа num в
// системе счисления base .
let num = 255;
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

//
alert((123456).toString(36)); // 2n9c   //Две точки в 123456..toString(36) это не опечатка.
//SAME AS ABOVE:
alert((123456).toString(36));

// Округление: Math.floor / Math.ceil / Math.round / Math.trunc

let num = 1.23456;
alert(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// Метод toFixed(n) Округляет значение до ближайшего числа, как в большую,
// так и в меньшую сторону, аналогично методу Math.round
let num = 12.34;
alert(num.toFixed(1)); // "12.3"

let num = 12.36;
alert(num.toFixed(1)); // "12.4"

// результатом toFixed является строка. Если десятичная часть чем необходима,
// будут добавлены нули в конец строки:
let num = 12.34;
alert(num.toFixed(5)); // "12.34000"  (строка), добавлены нули, чтобы получить 5 знаков после запятой

// alert (+num.toFixed(5))  // 12.34 (число)

// Неточные вычисления

alert(1e500); // Infinity

//
alert(0.1 + 0.2 == 0.3); // false
alert(0.1 + 0.2); // 0.30000000000000004
//

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // 0.30 (строка)

//
let sum = 0.1 + 0.2;
alert(+sum.toFixed(2)); // 0.3 (число)

//

alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

//
// Привет! Я – число, растущее само по себе!
alert(9999999999999999); // покажет 10000000000000000

//  Проверка: isFinite и isNaN
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN); // false  //NaN уникально тем, что оно не является равным ни чему другому, даже самому себе

//isFinite(value) преобразует аргумент в число и возвращает true ,
// если оно является обычным числом
alert(isFinite("15")); // true
alert(isFinite("str")); // false, потому что специальное значение: NaN
alert(isFinite(Infinity)); // false, потому что специальное значение: Infinity

//
let num = +prompt("Enter a number", "");
// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
alert(isFinite(num));

//  Object.is
Object.is(NaN, NaN) === true;
Object.is(0, -0) === false;
// Во всех других случаях:
Object.is(a, b); // идентичен a === b .

//  parseInt и parseFloat

alert(+"100px"); // NaN

alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5
alert(parseInt("12.3")); // 12, вернётся только целая часть
alert(parseFloat("12.3.4")); // 12.3, произойдёт остановка чтения на второй точке

// Второй аргумент parseInt(str, radix)

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, без 0x тоже работает
alert(parseInt("2n9c", 36)); // 123456

// Math.random()
alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (любое количество псевдослучайных чисел)

// Math.max(a, b, c...) / Math.min(a, b, c...)
alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

//Math.pow(n, power)
alert(Math.pow(2, 10)); // 2 в степени 10 = 1024

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
alert(a + b);

//

alert((1.35).toFixed(1)); // 1.4
alert((6.35).toFixed(1)); // 6.3  // alert( 6.35.toFixed(20) ); // 6.34999999999999964473
// Потеря точности может как увеличивать, так и уменьшать число
alert((1.35).toFixed(20)); // 1.35000000000000008882

alert((6.35 * 10).toFixed(20)); // 63.50000000000000000000
alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

function readNumber() {
  let num;
  do {
    nam = prompt("Введите число", "0");
  } while (!isFinite(num));
  if (num === null || num === "") return null;
  return +num;
}
alert(`Число: ${readNumber()}`);

// Этот цикл – бесконечный.
let i = 0;
while (i != 10) {
  i += 0.2;
}

// Случайное число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// Случайное целое число от min до max
function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}
alert(randomInteger(1, 3));
// Функция будет работать, но неправильно. Вероятность получить min и max
// значения в 2 раза меньше, чем любое другое число.
//   число от 1 ... до 1.4999999999 округлится до 1
// число от 1.5 ... до 2.4999999999 округлится до 2
// число от 2.5 ... до 2.9999999999 округлится до 3

// Правильное решение задачи:
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
alert(randomInteger(1, 3));
// Другое правильное решение
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInteger(1, 3));
//Теперь все интервалы отображаются следующим образом:
// число от 1 ... до 1.9999999999 округлится до 1
// число от 2 ... до 2.9999999999 округлится до 2
// число от 3 ... до 3.9999999999 округлится до 3
