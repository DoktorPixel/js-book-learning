// In most cases, the value of this is determined by how a function is called.
// The value of this depends on in which context it appears: function, class, or global.

// console.log("this global", this);

function declaration(one, two) {
  console.log(`this - ${one}, ${two}`, this);
}

const user_000 = {
  name: "Cristy",
  age: 18,
  nickname: "Little-Whore-2002",
  hi: function (value) {
    console.log(
      `hi inside user_000; value: ${value}`,
      this,
      this.name,
      this.age
    );
  },
};

const user_001 = {
  name: "Jana",
  age: 32,
  nickname: "Deepthroat-1989",
  hi: function (value) {
    console.log(
      `hi inside user_001; value: ${value}`,
      this,
      this.name,
      this.age
    );
  },
};

// declaration("hello", "die");

// user_000.declaration = declaration;

// user_000.declaration("user.test()", "user_000");
// user_000.hi("fuck");
// declaration('global object')
// declaration.call(user_000, "user_000");
// declaration.call(user_001, 'user_001')
// declaration.bind(user_000, "user_000")();
// declaration.bind(user_001, "user_001")();
// declaration.apply(user_001, ["user_000", "motherfucker"]);

// Note how the function is the same, but based on how it's invoked, the value of this is different.

// Arrow functions create a closure over the this value of its surrounding scope
// no matter how it's invoked, this is set to what it was when the function was created
// The same applies to arrow functions created inside other functions: their this remains that of the enclosing lexical context

const arrow = (context) => console.log(`this ${context}`, this);

// arrow.call(user_000, "arrow.call global object");
// arrow.bind(user_001, "arrow.bind global object")();

// user_001.arrow = arrow
// user_001.arrow('global object')
