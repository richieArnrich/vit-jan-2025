const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controllers/userControllers.js");
const cors = require("cors");
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
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.use("/users", userController);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbconn();
});
