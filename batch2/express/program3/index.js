const express = require("express");

const app = express();

const { logger } = require("./middlewares/logger.js");

app.use(logger);

app.get("/home", (req, res) => {
  res.send("Welcome to the home page");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
