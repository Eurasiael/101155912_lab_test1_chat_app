const express = require("express");
const user_model = require("../models/User");
const app = express();

app.get("/users", async (req, res) => {
  const users = await user_model.find({}).sort({ createon: "desc" });

  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/user/signup", async (req, res) => {
  try {
    const new_user = new user_model(req.body);
      await new_user.save((err) => {
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

app.post("/user/signin", async (req, res) => {
  const user = await user_model.findOne({
    $or: [{ username: req.body.username }, { password: req.body.password }],
  });
  try {
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
