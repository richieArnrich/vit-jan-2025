// controllers for user schema

const express = require("express");
const router = express.Router();

const User = require("../models/userSchema.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secrete@123";

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

//roiute for login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ message: "User not found" });
    }
    if (password === user.password) {
      //create a token
      const token = jwt.sign({ user_id: user._id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ message: "logged in successfully", token: token, user });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
