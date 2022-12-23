let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;

// `${…}`
function sum(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// `` могут занимать более одной строки

let guestList = `Guests:
* John
* Pete
* Mary
`;
alert(guestList); // список гостей, состоящий из нескольких строк

// let guestList = "Guests: // Error: Unexpected token ILLEGAL
// * John";

// \n :
let guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList); // список гостей, состоящий из нескольких строк

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

let str2 = `Hello
World`;
alert(str1 == str2); // true

//Примеры с Юникодом:
// ©
alert("\u00A9");

// Длинные юникодные коды
// 佫, редкий китайский иероглиф
alert("\u{20331}");
// 😍, лицо с улыбкой и глазами в форме сердец
alert("\u{1F60D}");
// Все спецсимволы начинаются с обратного слеша, \ — так называемого «символа экранирования».
// Он также используется, если необходимо вставить в строку кавычку.
// alert('I\'m the Walrus!'); // I'm the Walrus!
alert(`I'm the Walrus!`); // I'm the Walrus!
alert("I'm the Walrus!"); // I'm the Walrus!
alert(`The backslash: \\`); // The backslash: \

// Длина строки
alert(`My\n`.length); // 3
// \n — это один спецсимвол, длина строки 3

// метод charAt : str.charAt(pos)
let str = `Hello`;
// получаем первый символ
alert(str[0]); // H
alert(str.charAt(0)); // H
// получаем последний символ
alert(str[str.length - 1]); // o
//
let str = `Hello`;
alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (пустая строка)
//

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}

//Строки неизменяемы
let str = "Hi";
str[0] = "h"; // ошибка
alert(str[0]); // не работает

//
let str = "Hi";
str = "h" + str[1]; // заменяем строку
alert(str); // hi

// Методы toLowerCase() и toUpperCase()

alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface

//
alert("Interface"[0].toLowerCase()); // 'i'

// Поиск подстроки  str.indexOf(substr, pos)

let str = "Widget with id";
alert(str.indexOf("Widget")); // 0, потому что подстрока 'Widget' найдена в начале
alert(str.indexOf("widget")); // -1, совпадений нет, поиск чувствителен к регистру
alert(str.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

//
let str = "Widget with id";
alert(str.indexOf("id", 2)); // 12

//
let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа"; // цель поиска
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}
//SAME AS ABOVE:
let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert(pos);
}
//
let str = "Widget with id";
if (str.indexOf("Widget")) {
  alert("Совпадение есть"); // не работает
}
//
let str = "Widget with id";
if (str.indexOf("Widget") != -1) {
  alert("Совпадение есть"); // теперь работает
}

// побитовый оператор НЕ  — ~
// для 32-разрядных целых чисел значение ~n равно -(n+1) .  В частности:
alert(~2); // -3, то же, что -(2+1)
alert(~1); // -2, то же, что -(1+1)
alert(~0); // -1, то же, что -(0+1)
alert(~-1); // 0, то же, что -(-1+1)
//
let str = "Widget";
if (~str.indexOf("Widget")) {
  alert("Совпадение есть"); // работает
}

// Методы includes, startsWith, endsWith
alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false

//
alert("Midget".includes("id")); // true
alert("Midget".includes("id", 3)); // false, поиск начат с позиции 3

// Методы str.startsWith и str.endsWith
alert("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
alert("Widget".endsWith("get")); // true, "get" — окончание "Widget"

// str.slice(start [, end])

let str = "stringify";
alert(str.slice(0, 5)); // 'strin', символы от 0 до 5 (не включая 5)

alert(str.slice(0, 1)); // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0

//
let str = "stringify";
alert(str.slice(2)); // ringify, с позиции 2 и до конца

//
let str = "stringify";
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert(str.slice(-4, -1)); // gif

// str.substring(start [, end])  можно задавать start больше end
let str = "stringify";
// для substring эти два примера — одинаковы
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"
// …но не для slice:
alert(str.slice(2, 6)); // "ring" (то же самое)
alert(str.slice(6, 2)); // "" (пустая строка)
// Отрицательные значения substring , в отличие от slice , не поддерживает,
// они интерпретируются как 0

// str.substr(start [, length]) Возвращает часть строки от start длины length
let str = "stringify";
// ring,   получаем 4 символа, начиная с позиции 2
alert(str.substr(2, 4));

// Значение первого аргумента может быть отрицательным,
// тогда позиция определяется с конца:
let str = "stringify";
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert(str.substr(-4, 2));

//  Сравнение строк
alert("a" > "Z"); // true, строчные буквы больше заглавных

alert("a" > "Z"); // true , диакритические знаки, идут «не по порядку»

// str.codePointAt(pos) Возвращает код для символа
// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90

// String.fromCodePoint(code) Создаёт символ по его коду
alert(String.fromCodePoint(90)); // Z

// 90 — 5a в шестнадцатеричной системе счисления
alert("\u005a"); // Z

let str = "";
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~􀀀􀀀􀀀􀀀􀀀
// ¡¢£¤¥¦§¨©ª«¬ ®¯°±²³´μ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// Правильное сравнение str.localeCompare(str2)
alert("Österreich".localeCompare("Zealand")); // -1

// Сделать первый символ заглавным
// ucFirst("вася") == "Вася";
let newStr = str[0].toUpperCase() + str.slice(1);
// Если строка пуста, str[0] вернёт
// undefined , а у undefined нет метода toUpperCase()
// поэтому мы получим ошибку

// нвдо Добавить проверку на пустую строку
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("вася")); // Вася

// Проверка на спам
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));

// Усечение строки
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

//Выделить число
alert(extractCurrencyValue("$120") === 120); // true

function extractCurrencyValue(str) {
  return +str.slice(1);
}
