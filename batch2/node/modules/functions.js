//define function to add,subtract etc
function add(a, b) {
  let r = a + b;
  console.log(r);
}

function sub(a, b) {
  let r = a - b;
  console.log(r);
}

//export add() and sub()
module.exports = { add, sub };
