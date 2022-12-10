console.log("switch");

let a = 2 + 2;
switch (a) {
  case 3:
    alert("Маловато");
    break;
  case 4:
    alert("В точку!");
    break;
  case 5:
    alert("Перебор");
    break;
  default:
    alert("Нет таких значений");
}

// проверка на равенство всегда строгая
let arg = prompt("Введите число?");
switch (arg) {
  case "0":
  case "1":
    alert("Один или ноль");
    break;
  case "2":
    alert("Два");
    break;
  case 3: // "3" , которая не соответствует строгому равенству === с числом 3
    alert("Никогда не выполнится!");
    break;
  default:
    alert("Неизвестное значение");
}

//

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;
  default:
    alert("We hope that this page looks ok!");
}
//SAME AS ABOVE:
let browser = prompt( "write your browser");
if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
