const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

const connect = function () {
  return mongoose.connect("mongodb://127.0.0.1");
};

const start = async () => {
  try {
    await connect();
    app.listen(5000, () => {
      console.log("App Listening on port 5000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
