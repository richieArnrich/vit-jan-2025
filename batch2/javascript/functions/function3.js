function func1() {
  let myname = "Kavan"; //local variables
  console.log(myname + " inside func1()");
}
func1();

function outerFunction() {
  let myName = "John";

  function innerFunction() {
    console.log(myName + " inside innerFunction()");
    let friendName = "Amith";
    console.log(friendName + " inside innerFunction()");
  }

  innerFunction(); //calling innerfunction inside the outerfunction
  console.log(friendName + " outside innerFunction()");
}

outerFunction();
