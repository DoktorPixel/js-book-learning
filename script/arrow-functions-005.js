console.log("It is arrow functions),");

let func = (arg1, arg2, ...argN) => expression;
//SAME AS ABOVE:
let func = function (arg1, arg2, ...argN) {
  return expression;
};

//
let sum = (a, b) => a + b;
//SAME AS ABOVE:
let sum = function (a, b) {
  return a + b;
};
alert(sum(1, 2)); // 3
//
//
let double = (n) => n * 2;
alert(double(3)); // 6
//SAME AS ABOVE:
let double = function (n) {
  return n * 2;
};

//

let age = prompt("Сколько Вам лет?", 18);
let welcome = age < 18 ? () => alert("Привет") : () => alert("Здравствуйте!");
welcome(); // теперь всё в порядке

// Многострочные стрелочные функции:

let sum = (a, b) => {
  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};
alert(sum(1, 2)); // 3

//

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);
//SAME AS ABOVE:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
