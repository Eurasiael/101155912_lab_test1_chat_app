const express = require("express");
const personal_message_model = require("../models/PersonalMessage");
const room_message_model = require("../models/RoomMessages");
const app = express();

app.get("/personal-message/list/my/:username", async (req, res) => {
  const msgs = await personal_message_model
    .find({ to_user: req.params.username })
    .distinct("from_user");

  try {
    res.status(200).send(msgs);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/personal-message/list/from/:username", async (req, res) => {
  const messages = await personal_message_model
    .find({ from_user: req.params.username })
    .sort({ date_sent: "desc" });

  try {
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/personal-message/list/to", async (req, res) => {
  const message = await personal_message_model(req.body);
  try {
    await message.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(err);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/room-lists", async (req, res) => {
  const messages = await room_message_model.find({}).distinct("room");
  try {
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/room-messages/:room", async (req, res) => {
  const messages = await room_message_model
    .find({ room: req.params.room })
    .sort({ date_sent: "desc" });
  try {
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/room-message/send", async (req, res) => {
  const messages = new room_message_model(req.body);
  try {
    await messages.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send(err);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
