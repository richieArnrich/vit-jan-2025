//create a simple express js server
const express = require("express");

//instantiate express
const app = express();

//create a simple route to display a message
app.get("/route1", (req, res) => {
  res.send("Hello from route 1");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
