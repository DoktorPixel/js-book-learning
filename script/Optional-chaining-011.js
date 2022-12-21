let user = {}; // пользователь без свойства address
alert(user.address.street); // ошибка!

//

// Произойдёт ошибка, если querySelector(...) равен null.
let html = document.querySelector(".my-element").innerHTML;

//
let user = {}; // пользователь без адреса
alert(user && user.address && user.address.street); // undefined (без ошибки)

// Опциональная цепочка ?. останавливает вычисление и возвращает undefined , если
// часть перед ?. имеет значение undefined или null .

let user = {}; // пользователь без адреса
alert(user?.address?.street); // undefined (без ошибки)

let user = null;
alert(user?.address); // undefined
alert(user?.address.street); // undefined

// Переменная перед ?. должна быть объявлена
// Если переменной user вообще не существует, то выражение user?.anything
// выдаст ошибку:
// ReferenceError: user is not defined
user?.address;
// Объявление переменной (например let/const/var user ) обязательно должно
// быть. Опциональная цепочка работает только с существующими переменными.

// ?. немедленно останавливает вычисление, если левой части не существует:
let user = null;
let x = 0;
user?.sayHi(x++); // нет user, поэтому до x++ вычисление не дойдет
alert(x); // 0, значение не было увеличено на единицу

// ?.() используется для вызова потенциально несуществующей функции
let user1 = {
  admin() {
    alert("Я администратор");
  },
};
let user2 = {};
user1.admin?.(); // Я администратор
user2.admin?.();

//

let user1 = {
  firstName: "Иван",
};
let user2 = null; // Представим, что пользователь не авторизован
let key = "firstName";
alert(user1?.[key]); // Иван
alert(user2?.[key]); // undefined
alert(user1?.[key]?.something?.not?.existing); // undefined

// Кроме этого, ?. можно совместно использовать с delete :
delete user?.name; // Удалить user.name, если пользователь существует


// Можно использовать ?. для безопасного чтения и удаления, но не для записи
let user;
user?.name = "John"; // Ошибка, это не сработает
// это по сути то же самое что undefined = "John"


