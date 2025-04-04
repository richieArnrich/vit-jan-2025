const mongoose = require("mongoose");

//define user schema with attributes name,email,password,contact
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: String,
});

//export schema
module.exports = mongoose.model("User", userSchema);
