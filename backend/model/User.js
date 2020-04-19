const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 20
  },
  password: {
    type: String,
    required: true,
    min: 1,
    max: 2000
  }
});

module.exports = mongoose.model("User", userSchema);
