// controllers for user schema

const express = require("express");
const router = express.Router();

const User = require("../models/userSchema.js");

router.get("/allusers", async (req, res) => {
  try {
    const userData = await User.find();
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error fetching users" });
  }
});

router.post("/regUser", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, contact } = req.body;
    // new record in db
    const user = new User({ name, email, password, contact });
    await user.save();
    res.json({ message: "user registered successfully", userDoc: user });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error registering user" });
  }
});

module.exports = router;
