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

module.exports = router;
