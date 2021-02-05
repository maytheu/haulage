const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SALT_FACTORY = 10;
const jwt = require("jsonwebtoken");

const MAX_LOGIN = 3;
const LOCK_TIME = 2 * 60 * 60 * 1000;

require("dotenv").config;

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: 1,
    maxLength: 14,
  },
  token: String,
  loginAttempt: {
    type: Number,
    required: true,
    default: 0,
  },
  lockUntil: {
    type: Number,
    default: 0,
  },
});

//mongoose middleware to hash the password before saving it to the DB
adminSchema.pre("save", function (next) {
  var admin = this;
  //hash the password if its new or modified
  if (!admin.isModified("password")) return next();

  bcrypt.genSalt(SALT_FACTORY, function (err, salt) {
    if (err) return next(err);

    //hasing the passsword with the salt
    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) return next(err);
      //assign the hash to the user
      admin.password = hash;
      next();
    });
  });
});

//check if user is locked
adminSchema.virtual("isLocked").get(function () {
  //check the time stamp
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

//comparing hash password for user login
adminSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//constant definition using statics method
adminSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
};

adminSchema.methods.incLoginAttempts = function (cb) {
  // if we have a previous lock that has expired, restart at 1
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.update(
      { $set: { loginAttempt: 1 }, $unset: { lockUntil: 1 } },
      cb
    );
  }
  // otherwise we're incrementing
  var updates = { $inc: { loginAttempt: 1 } };
  // lock the account if we've reached max attempts and it's not locked already
  if (this.loginAttempt + 1 >= MAX_LOGIN && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + LOCK_TIME };
  }
  return this.update(updates, cb);
};

adminSchema.statics.getAuthenticated = function (email, passsword, cb) {
  this.findOne({ email: email }, function (err, admin) {
    if (err) return cb(err);
    if (!admin) return cb(null, null, 0);
    //if account is locked
    if (admin.isLocked) {
      //increament login process
      return admin.incLoginAttempts(function (err) {
        if (err) return cb(err);
        return cb(null, null, 2);
      });
    }

    //the password match test
    admin.comparePassword(passsword, function (err, isMatch) {
      //password matches
      if (isMatch) {
        //check if account is locked before returning the admin
        if (!admin.loginAttempt && !admin.lockUntil) {
          //reset attempt and log until info
          var updates = {
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 },
          };
          return admin.update(updates, function (err) {
            if (err) return cb(err);
            return cb(null, admin);
          });
        }
      }
      //password do not match
      admin.incLoginAttempts(function (err) {
        if (err) return cb(err);
        return cb(null, null, 1); //incorrect password
      });
    });
  });
};

//generate token to be saved in the database
adminSchema.methods.generateToken = function (cb) {
  var admin = this;
  var token = jwt.sign(admin._id.toHexString(), process.env.SECRET_KEY);
  admin.token = token;
  admin.save(function (err, admin) {
    if (err) return cb(err);
    cb(null, admin);
  });
};

//this check if token is present
adminSchema.statics.findByToken = function (token, cb) {
  var admin = this;
  jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {
    admin.findOne({ _id: decode, token: token }, function (err, admin) {
      if (err) return cb(err);
      cb(null, admin);
    });
  });
};

mongoose.model("admins", adminSchema);
