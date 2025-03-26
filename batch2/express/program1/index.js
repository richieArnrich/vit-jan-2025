//simple express js server
const express = require("express");

const app = express(); // instantiate express

//simple route to get data
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/user", (req, res) => {
  res.json({ username: "Kohli", id: 18 });
});

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
  { id: 5, name: "Charlie" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
