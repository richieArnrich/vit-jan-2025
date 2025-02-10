function greet() {
  document.write(
    "<br>----------------------------------------------------<br>"
  );
  document.write("Hello world, I am a non parameterised named function");
}

greet();

function greetFriend(name) {
  document.write(
    "<br>----------------------------------------------------<br>"
  );
  document.write("Hello " + name + " I am a parameterised named function");
}

greetFriend("Vinay");

let anonFunc1 = function () {
  document.write(
    "<br>----------------------------------------------------<br>"
  );
  document.write("Hello world, I am an anonymous non-parameterised function");
};
anonFunc1();

let anonFunc2 = function (name) {
  document.write(
    "<br>----------------------------------------------------<br>"
  );
  document.write(
    "Hello, " + name + " I am an anonymous parameterised function"
  );
};
anonFunc2("Hari");

let arrFunc1 = () => {
  document.write(
    "<br>----------------------------------------------------<br>"
  );
  document.write("Hello world, I am an arrow non-parameterised function");
};

arrFunc1();

let arrFunc2 = (name) => {
  document.write(
    "<br>----------------------------------------------------<br>"
  );
  document.write("Hello," + name + " I am an arrow parameterised function");
};

arrFunc2("Vijay");
