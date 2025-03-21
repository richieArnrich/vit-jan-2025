/*

take last number (last = num%10)
multiply the reverse by 10
append the last number to the reverse variable
update the number by removing the last digit (num = num/10)
repeat until num becomes 0
 */

let num = 32243;
let reverse = 0;

while (num != 0) {
  console.log("num = " + num);
  let last = num % 10;
  console.log("last = " + last);
  reverse = reverse * 10 + last;
  console.log("reverse = " + reverse);
  num = parseInt(num / 10);
  console.log("---------------------");
}
