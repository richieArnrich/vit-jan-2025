const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server running");
});

//render a html file
app.get("/home", (req, res) => {
  console.log(__dirname); // present working directory
  res.sendFile(__dirname + "/index.html");
});

const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    designation: "SDE",
    location: "Bangalore",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    designation: "Graphic designer",
    location: "Delhi",
  },
  {
    id: 3,
    name: "John Smith",
    age: 35,
    designation: "Sr Graphic designer",
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Jane Smith",
    age: 40,
    designation: "Jr Developer",
    location: "Chennai",
  },
  {
    id: 5,
    name: "John Brown",
    age: 45,
    designation: "Accountant",
    location: "Bangalore",
  },
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
