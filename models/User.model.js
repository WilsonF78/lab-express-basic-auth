const mongoose = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
