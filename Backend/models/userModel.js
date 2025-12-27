const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "please add the UserName"],
  },
  Email: {
    type: String,
    required: [true, "please add the Email"],
    unique: true,
  },
  Password: {
    type: String,
    required: [true, "please add the Password"],
  },
  IsAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);