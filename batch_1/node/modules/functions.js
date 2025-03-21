function add(a, b) {
  let r = a + b;
  console.log(r);
}

function sub(a, b) {
  let r = a - b;
  console.log(r);
}

function multiply(a, b) {
  let r = a * b;
  console.log(r);
}
//provide exports
module.exports = { add, sub, multiply };
