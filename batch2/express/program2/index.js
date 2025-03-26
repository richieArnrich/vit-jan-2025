const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//handling params
app.get("/check/:age", (req, res) => {
  let age = req.params.age;
  age = parseInt(age);
  if (age >= 18) {
    res.json({ message: `You are eligible to join the club` });
  } else {
    res.json({ message: `You are not eligible to join the club` });
  }
});

//route to render a basic html file
app.get("/home", (req, res) => {
  console.log(__dirname); //present working directory
  res.sendFile(__dirname + "/index.html");
});

const employees = [
  { id: 1, name: "John Doe", age: 30, designation: "SDE" },
  { id: 2, name: "Jane Doe", age: 25, designation: "Graphic Designer" },
  { id: 3, name: "John Smith", age: 25, designation: "Jr SDE" },
  { id: 4, name: "Jane Smith", age: 30, designation: "Team Lead" },
  { id: 5, name: "John Brown", age: 35, designation: "Sr. SDE" },
];

app.get("/home/employees", (req, res) => {
  res.json(employees);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
