const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controllers/userControllers.js");

const app = express();

const dbconn = async () => {
  try {
    //db connect
    await mongoose.connect("mongodb://localhost:27017/userRegn");
    console.log("connected to mongodb");
  } catch (err) {
    console.log("error connecting to db ", err);
  }
};

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.use("/users", userController);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbconn();
});
