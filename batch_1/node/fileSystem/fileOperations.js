const fs = require("node:fs");

function writeIntoFile(data) {
  const file = "myData.txt";
  fs.writeFileSync(file, data);
  console.log("File written successfully");
}

function readFromFile() {
  const file = "myData.txt";
  const data = fs.readFileSync(file, "utf-8");
  console.log(data);
}

function appendIntoFile(data) {
  const file = "myData.txt";
  fs.appendFileSync(file, data);
  console.log("data appended successfully");
}
module.exports = { writeIntoFile, readFromFile, appendIntoFile };
