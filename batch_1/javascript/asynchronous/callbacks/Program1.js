function add(a, b, cb) {
  console.log("Add() called");
  setTimeout(() => {
    let r = a + b;
    cb(r);
  }, 2000);
}

function sub(addresult, c, cb) {
  console.log("Sub() called");
  setTimeout(() => {
    let r = addresult - c;
    cb(r);
  }, 2000);
}

function multiply(subresult, d, cb) {
  console.log("Multiply() called");
  setTimeout(() => {
    let r = subresult * d;
    cb(r);
  }, 2000);
}

// callback hell: leads to pyramid of doom, which makes understanding of the code harder
add(10, 20, (addResult) => {
  sub(addResult, 5, (subresult) => {
    multiply(subresult, 3, (finalResult) => {
      console.log("Final Callback called");
      console.log("Final Result : " + finalResult);
    });
  });
});
