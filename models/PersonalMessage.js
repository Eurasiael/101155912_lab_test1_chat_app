const mongoose = require("mongoose");

const PersonalMsgSchema = new mongoose.Schema({
  from_user: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  to_user: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  date_sent: {
    type: Date,
    default: Date.now,
  },
});

const PersonalMessage = mongoose.model("PersonalMessage", PersonalMsgSchema);
module.exports = PersonalMessage;
