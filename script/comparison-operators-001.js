console.log("comparison operators");

let user;
alert(user ?? "Anonymous"); // Anonymous

let user = "Ivan";
alert(user ?? "Anonymous"); // Ivan
//

let firstName = null;
let lastName = undefined;
let nickName = "Ivan";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Ivan

let firstName = null;
let lastName = undefined;
let nickName = "Ivan";
// shows the first defined value:
alert(firstName || lastName || nickName || "Anonymous"); // Ivan

// || returns the first true value.
// ?? returns the first value specified.

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

//

let x = (1 && 2) ?? 3;
alert(x); // 2

//

