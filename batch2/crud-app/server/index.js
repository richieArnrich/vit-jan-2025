const express = require("express");
const mongoose = require("mongoose");
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

app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbconn();
});
