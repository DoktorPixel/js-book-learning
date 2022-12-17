// Объект пользователя
let user = {
    name: "Джон",
    age: 30
    };

// 
let user = {
    name: "Джон",
    age: 30
    };
    user.sayHi = function() {
    alert("Привет!");
    };
    user.sayHi(); // Привет!
    // 

let user = {
    // ...
     };
     // сначала объявляем
          function sayHi() {
       alert("Привет!");
       };
      // затем добавляем в качестве метода
      user.sayHi = sayHi;
      user.sayHi(); // Привет!

// 
// эти объекты делают одно и то же (одинаковые методы)
user = {
    sayHi: function() {
    alert("Привет");
    }
    };
    // сокращённая запись выглядит лучше, не так ли?
    user = {
    sayHi() { // то же самое, что и "sayHi: function()"
    alert("Привет");
    }
    };
// 

