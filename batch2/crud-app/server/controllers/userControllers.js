// controllers for user schema

const express = require("express");
const router = express.Router();

const user = require("../models/userSchema.js");

router.get("/allusers", async (req, res) => {
  try {
    const userData = await user.find();
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error fetching users" });
  }
});

module.exports = router;
