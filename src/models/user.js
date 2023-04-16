const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, enum: ["admin", "client"], default: "client" },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
