const app = require("express")(); // importing and instantiating express in one line
const { logger } = require("./middlewares/logger.js");

app.get("/", (req, res) => {
  res.send("Server running");
});

//initialise middleware functions
app.use(logger);

app.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//just 2 mins..