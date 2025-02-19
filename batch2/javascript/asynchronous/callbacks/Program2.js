function sum(a, b, cb) {
  console.log("add() called");
  setTimeout(() => {
    let r = a + b;
    cb(r); //inner function of add
  }, 2000);
}

function sub(addResult, c, cb) {
  setTimeout(() => {
    console.log("sub() called");
    let r = addResult - c;
    cb(r); // inner function of sub
  }, 2000);
}

function multiply(subresult, d, cb) {
  setTimeout(() => {
    console.log("multiply() called");
    let r = subresult * d;
    cb(r); //inner function of multiply
  }, 2000);
}
sum(15, 20, (addResult) => {
  sub(addResult, 4, (subresult) => {
    multiply(subresult, 2, (multiplyresult) => {
      console.log(multiplyresult);
    });
  });
});
// nested callbacks ---> callback hell
