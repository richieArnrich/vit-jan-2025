const express = require("express");
const app = express();

const router = express.Router();

//import user schema
const User = require("../models/userSchema.js");

//route and controller to get all users
router.get("/getusers", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error getting users" });
  }
});

module.exports = router;
