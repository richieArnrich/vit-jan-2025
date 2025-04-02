const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//configure view engine
app.set("view engine", "ejs");

//configure views folder
app.set("views", "./views");

//configure public folder
app.use(express.static("./public"));

//route to get ejs file
app.get("/home", (req, res) => {
  res.render("index", {
    title: "My Web Page",
    name: "John Doe",
    age: 25,
    profession: "student",
    pic: "images/profile-pic.jpg",
    location: "Bangalore",
    contact: 944123123,
    email: "user@example.com",
  });
});

//route to display profiles.ejs
app.get("/profiles", (req, res) => {
  res.render("profiles", {
    profiles: [
      {
        name: "John Doe",
        age: 25,
        profession: "student",
        pic: "images/profile-pic.jpg",
      },
      {
        name: "Jane Doe",
        age: 30,
        profession: "teacher",
        pic: "images/profile-pic.jpg",
      },
      {
        name: "Bob Smith",
        age: 35,
        profession: "engineer",
        pic: "images/profile-pic.jpg",
      },
    ],
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
