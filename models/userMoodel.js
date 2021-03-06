const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const shortid = require("shortid");

const UserSchema = new Schema({
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
});
//if the confirm 4 payment, you remove yourself from the board

UserSchema.methods.verifyPassword = async function (Password) {
  const match = await bcrypt.compare(Password, this.Password);

  if (match) {
    return true;
  } else {
    return false;
  }
};

module.exports = mongoose.model("Users", UserSchema);
