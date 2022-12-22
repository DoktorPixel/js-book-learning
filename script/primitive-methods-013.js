// Primitive Methods

let roma = {
  name: "Рома",
  sayHi: function () {
    alert("Привет, дружище!");
  },
};
roma.sayHi(); // Привет, дружище!
// объект roma с методом sayHi

//Примитив как объект, метод str.toUpperCase()
let str = "Привет";
alert( str.toUpperCase() ); // ПРИВЕТ

// toFixed(n) округляет число до n знаков после запятой.
let n = 1.23456;
alert( n.toFixed(2) ); // 1.23


// 
alert( typeof 0 ); // "число"
alert( typeof new Number(0) ); // "object"!
// Объекты в if всегда дают true , так что в нижеприведённом примере будет показан alert :
let zero = new Number(0);
if (zero) {
// zero возвращает "true", так как является объектом
alert( "zero имеет «истинное» значение?!?" );
}

// следующее вполне допустимо:
let num = Number("123"); // превращает строку в число


//   null/undefined не имеют методов
alert(null.test); // ошибка

// 
let str = "Привет";
str.test = 5; // (*)
alert(str.test);
// 1. undefined (без strict)
// 2. Ошибка (strict mode)
