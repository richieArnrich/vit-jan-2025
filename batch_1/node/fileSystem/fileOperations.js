const fs = require("node:fs");

function writeIntoFile(data) {
  const file = "myData.txt";
  fs.writeFileSync(file, data); //synchronous
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

//asynchronous write operation
function writeIntoFileAsync(data) {
  const file = "myData2.txt";
  fs.writeFile(file, data, (err) => {
    //asynchronous
    if (err) {
      console.error(err);
    } else {
      console.log("File written successfully");
    }
  });
  console.log("This is after writting into the file");
}

//reading file asynchronously
function readFromFileAsync() {
  const file = "myData2.txt";
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
  console.log("File read successfully");
}
module.exports = {
  writeIntoFile,
  readFromFile,
  appendIntoFile,
  writeIntoFileAsync,
  readFromFileAsync,
};
