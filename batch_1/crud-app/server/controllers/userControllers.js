const express = require("express");
const app = express();

const router = express.Router();

//import user schema
const User = require("../models/userSchema.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secrete@123";
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

router.post("/registeruser", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, contact } = req.body;
    const user = new User({ name, email, password, contact });
    await user.save();
    res.json({ message: "user registered successfully", userDoc: user });
  } catch (err) {
    console.log(err);
    res.json({ message: "error in user registeration", error: err });
  }
});

//login route
router.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "user not found" });
    }
    //match the password
    if (password === user.password) {
      //create a token
      const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.json({ message: "login successful", user, token });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "error in user login" });
  }
});

module.exports = router;
