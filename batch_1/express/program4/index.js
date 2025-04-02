const express = require("express");

const app = express();

//configure view engine
app.set("view engine", "ejs");

//configure the views folder
app.set("views", "./views");

//configure public folder
app.use(express.static("./public"));

const users = ["Anil", "John", "Amir", "Amith", "Christopher", "Nolan"];
//render the index.ejs file
app.get("/", (req, res) => {
  //render my name in index.ejs
  res.render("index", { name: "John Doe", title: "My Web Page", users: users });
  //   res.render("index");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
