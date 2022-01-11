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
  profileId: Number,
  phone: [{ type: Schema.Types.ObjectId, ref: "phones" }],
  password: { type: String, minLength: 8 },
  firstName: String,
  lastName: String,
  isSuperAdmin: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  adminRole: Number, //0-viewer,1-editor
  address: String,
  lockUntil: { type: Number, default: 0 },
  loginAttempt: { type: Number, default: 0 },
});

userSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next(); //only change if password modified
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash; //hash password
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.statics.login = async function (body, password, cb) {
  try {
    const user = await this.findOne(body);
    if (!user) return cb("User not found");
    user.comparePassword(password, (err, isMatch) => {
      if (err) return cb(err);
      if (!isMatch) return cb("Invalid");
      if (isMatch) return cb(null, user);
    });
  } catch (e) {
    cb(e);
  }
};

userSchema.statics.phoneLogin = async function (id, password, cb) {
  try {
    const user = await this.findById(id);
    if (!user) return cb("User not found");
    user.comparePassword(password, (err, isMatch) => {
      if (err) return cb(err);
      if (!isMatch) return cb("Invalid");
      if (isMatch) return cb(null, user);
    });
  } catch (e) {
    cb(e);
  }
};

module.exports = mongoose.model("users", userSchema);
