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

module.exports = { WriteIntoFile, WriteIntoFileAsync };
