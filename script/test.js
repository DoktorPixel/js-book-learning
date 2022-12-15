console.log("It is a test page");
x = 2;
n = 3;
function pow(x, n) {
  let result = 1;
  // <--
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  // <--
  return result;
  console.log(x, n);
}

const user = {
  name: "John",
};
user.name = "Pete"; // (*)
alert(user.name); // Pete
