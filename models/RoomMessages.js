const mongoose = require("mongoose");

const RoomMsgSchema = new mongoose.Schema({
  from_user: {
    type: String,
    required: true,
    trim: true,
  },
  room: {
    type: String,
    required: true,
    trim: true,
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

const RoomMessage = mongoose.model("RoomMessage", RoomMsgSchema);
module.exports = RoomMessage;
