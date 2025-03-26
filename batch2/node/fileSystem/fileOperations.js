//import fs module
const fs = require("node:fs");

function WriteIntoFile(data) {
  const filePath = "myData.txt";
  fs.writeFileSync(filePath, data); //synchronous in nature
  console.log("Data written successfully");
}

function WriteIntoFileAsync(data) {
  const filePath = "myData2.txt";
  fs.writeFile(filePath, data, (err) => {
    //Asynchronous in nature
    if (err) {
      console.error(err);
    } else {
      console.log("Data written successfully");
    }
  });
  console.log("I am written after writing file()");
}

//read from a file synchronously
function ReadFromFileSync() {
  const filePath = "myData.txt";
  const data = fs.readFileSync(filePath, "utf8"); // synchronous in nature
  console.log(data);
}

//read from file asynchronously
function ReadFromFileAsync() {
  const filePath = "myData2.txt";
  fs.readFile(filePath, "utf8", (err, data) => {
    //asynchronous in nature
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
  console.log("Data being read asynchronously");
}

//append file
function AppendFile() {
  const filePath = "myData.txt";
  const data = "\nThis is a new line of data\n";
  fs.appendFileSync(filePath, data);
  console.log("Data appended successfully");
}

//append file async
function AppendFileAsync() {
  const filePath = "myData2.txt";
  const data = "\nThis is a new line of data\n";
  fs.appendFile(filePath, data, (err) => {
    //asynchronous in nature
    if (err) {
      console.log(err);
    } else {
      console.log("Data appended successfully");
    }
  });
}

module.exports = {
  WriteIntoFile,
  WriteIntoFileAsync,
  ReadFromFileSync,
  ReadFromFileAsync,
  AppendFile,
  AppendFileAsync,
};
