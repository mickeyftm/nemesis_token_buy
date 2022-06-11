const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  account : {
    type: String,
    required: true
  },
  balance: {
    type:Number,
    required:true
  }
})

const User = mongoose.model("user", UserSchema)
module.exports = User;