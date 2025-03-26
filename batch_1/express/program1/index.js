//create a simple express js server
const express = require("express");

//instantiate express
const app = express();

//create a simple route to display a message

app.get("/route1", (req, res) => {
  res.send("Hello from route 1");
});

//hanlde parameters
app.get("/route2/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  res.send("hello from route 2 and the entered value is " + id);
});

//conditional handling of params
app.get("/check/:age", (req, res) => {
  let age = req.params.age;
  age = parseInt(age);
  if (age >= 18) {
    res.json({ message: "you are eligible to vote" });
  } else {
    res.json({ message: "you are not eligible to vote" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
