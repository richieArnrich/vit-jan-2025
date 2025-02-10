function greet() {
  // Non parameterised
  //   Named functions
  document.write(
    "<br>Hello world, I am a named non-parameterised function<br>"
  );
}

greet();
// Named function with parameter
function wishSomeone(name) {
  document.write(
    "<br>Hello " + name + ", I am a named parameterised function<br>"
  );
}

wishSomeone("John");

// Anonymous function
let greet1 = function () {
  document.write(
    "<br>Hello world, I am an anonymous non-parameterised function<br>"
  );
};
greet1();
// Anonymous function with parameter
let greet2 = function (name) {
  document.write(
    "<br>Hello " + name + ", I am an anonymous parameterised function<br>"
  );
};

greet2("Ravi");

// arrow function
let arr1 = () => {
  document.write(
    "<br>Hello world, I am an arrow non-parameterised function<br>"
  );
};
arr1();
// Arrow function with parameter
let arr2 = (name) => {
  document.write(
    "<br>Hello " + name + ", I am an arrow parameterised function<br>"
  );
};
arr2("Kumar");
