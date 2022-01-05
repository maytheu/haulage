const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const SALT = 10;

const userSchema = mongoose.Schema({
  //validating only when value is not null
  username: {
    type: String,
    trim: true,
    index: {
      unique: true,
      partialFilterExpression: { username: { $type: "string" } },
    },
  },
  email: {
    type: String,
    trim: true,
    index: {
      unique: true,
      partialFilterExpression: { email: { $type: "string" } },
    },
  },
  phone: [{ type: Schema.Types.ObjectId, ref: "phones" }],
  password: { type: String, minLength: 8, required: 1 },
  firstName: String,
  lastName: String,
  address: String,
  lockUntil: { type: Number, default: 0 },
  loginAttempt: { type: Number, default: 0 },
});

userSchema.pre("save", async function (next) {
  var user = this;
  if (!user.isModified("password")) return next(); //only change if password modified
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next();
      user.password = hash; //hash password
      next();
    });
  });
});

module.exports = mongoose.model("users", userSchema);
