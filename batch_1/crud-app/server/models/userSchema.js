const mongoose = require("mongoose");

// create user schema
const userSchema = new mongoose.Schema({
  //attribute of the user
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  contact: {
    type: String,
  },
});

//export model
module.exports = mongoose.model("User", userSchema);
//create a user collection in mongodb
