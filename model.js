const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: false },
  role: { type: String, required: false },
  age: { type: Number, required: false },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
