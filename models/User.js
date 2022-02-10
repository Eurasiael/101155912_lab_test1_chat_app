const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 20,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    alias: "surname", //Familyname
    required: true,
    trim: true,
  },
  createon: {
    type: Date,
    default: Date.now,
    alias: "createdat",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
