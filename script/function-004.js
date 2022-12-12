console.log("function");

function showMessage() {
  alert("Всем привет!");
}

//  function имя(параметры) {
// ...тело...  //код функции, также называемый «телом функции», внутри фигурных скобок.
// }
//

function showMessage() {
  alert("Всем привет!");
}
showMessage();
showMessage();
// Вызов showMessage() выполняет код функции. Здесь мы увидим сообщение дважды.

function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная
  alert(message);
}
showMessage(); // Привет, я JavaScript!
alert(message); // <-- будет ошибка, т.к. переменная видна только внутри функции
//

let userName = "Вася";
function showMessage() {
  let message = "Привет, " + userName;
  alert(message);
}
showMessage(); // Привет, Вася
//

let userName = "Вася";
function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной
  let message = "Привет, " + userName;
  alert(message);
}
alert(userName); // Вася перед вызовом функции
showMessage();
alert(userName); // Петя, значение внешней переменной было изменено функцией
//
let userName = "Вася";
function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную
  let message = "Привет, " + userName; // Петя
  alert(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную

//

function showMessage(from, text) {
  // аргументы: from, text
  alert(from + ": " + text);
}
showMessage("Аня", "Привет!"); // Аня: Привет! (*)
showMessage("Аня", "Как дела?"); // Аня: Как дела? (**)

//
function showMessage(from, text) {
  from = "*" + from + "*"; // немного украсим "from"
  alert(from + ": " + text);
}
let from = "Аня";
showMessage(from, "Привет"); // *Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
alert(from); // Аня

//
function showMessage(from, text = "текст не добавлен") {
  alert(from + ": " + text);
}
showMessage("Аня"); // Аня: текст не добавлен
//

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}

//
function showMessage(from, text) {
  if (text === undefined) {
    text = "текст не добавлен";
  }
  alert(from + ": " + text);
}
//SAME AS ABOVE:
function showMessage(from, text) {
  // Если значение text ложно, тогда присвоить параметру text значение по умолчанию
  text = text || "текст не добавлен";
}

//
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert(result); // 3

//
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("А родители разрешили?");
  }
}
let age = prompt("Сколько вам лет?", 18);
if (checkAge(age)) {
  alert("Доступ получен");
} else {
  alert("Доступ закрыт");
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  alert("Вам показывается кино"); // если checkAge(age) вернёт false , showMovie не выполнит alert .
}

//
function doNothing() {
  /* пусто */
}
alert(doNothing() === undefined); // true

// Пустой return аналогичен return undefined :
function doNothing() {
  return;
}
alert(doNothing() === undefined); // true

//
return some + long + expression + or + whatever * f(a) + f(b); // Если мы хотим, чтобы возвращаемое выражение занимало несколько строк, нужно начать его на той же строке, что и return . Или, хотя бы, поставить там открывающую скобку

//Например, сравним ниже две функции showPrimes(n) . Каждая из них выводит простое число до n
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i); // простое
  }
}
//SAME AS ABOVE:
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i); // простое
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

//

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
//SAME AS ABOVE:
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
//SAME AS ABOVE:
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// Напишите функцию min(a,b) , которая возвращает меньшее из чисел a и b:
min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//SAME AS ABOVE:
function min(a, b) {
  return a < b ? a : b;
}
//P.S. В случае равенства a == b не имеет значения, что возвращать.

// Условие:
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}

//

104;
