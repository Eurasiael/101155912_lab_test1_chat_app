const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes.js");
const MessageRouter = require("./routes/MessageRoutes.js");
const app = express();

app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect(
  "mongodb+srv://admin:zvqji9tySp46qgM0@cluster0.hfb5d.mongodb.net/fullstack_labtest01?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter);
app.use(MessageRouter);

app.listen(8081, () => {
  console.log("Server is running...");
});
