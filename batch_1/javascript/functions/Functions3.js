let var1 = 100;

function printData() {
  document.write(var1 + "<br>");
  let var2 = 200;
  document.write(var2 + "<br>");
}

printData();

function outerFunction() {
  let name = "John"; //inner function can access this, because of lexical scoping

  function innerFunction() {
    let friend = "Amith";
    document.write(friend + "<br>");
    document.write(name + "<br>");
  }
  //   document.write(friend + " inside outerfunction() " + "<br>"); friend is local to only outerfunction()
  innerFunction(); // innerfunction is called by the outerfunction
}

outerFunction();
