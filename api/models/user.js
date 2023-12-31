const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  trips:{ type: Array, default: [] }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
