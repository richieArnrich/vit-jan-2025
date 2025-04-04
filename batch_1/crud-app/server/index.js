const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userController = require("./controllers/userControllers.js");
app.get("/api", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// db connection function
const dbconn = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/user-mgmt");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to mongodb ", err);
  }
};

app.use(express.json());
app.use("/users", userController);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbconn();
});
