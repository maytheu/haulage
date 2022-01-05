const mongoose = require("mongoose");

const {
  param,
  verifyEmail,
  verifyPassword,
  verifyPhone,
} = require("../utils/verify");
const User = require("../model/userSchema");
const Phone = require("../model/phoneSchema");

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  if (param(email) || param(password))
    return res.status(400).json({ data: "Incomplete request" });
  if (!verifyPassword(password)) {
    return res.status(406).json({ data: "Password too weak" });
  }
  const isEmail = verifyEmail(email);
  let user;
  if (isEmail) {
    user = new User({ email, password });
  } else {
    user = new User({ username: email, password });
  }

  if (verifyPhone(email)) {
    user = new User({ password });
  }

  const resp = await user.save();
  if (verifyPhone(email)) {
    const phone = new Phone({ id: resp._id, phone: email });
    await phone.save();
  }

  // cookie to cliient
  console.log(resp);
};
