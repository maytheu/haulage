const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    try {
      user = new User({ password });
      const resp = await user.save();
      const phone = new Phone({ id: resp._id, phone: email });
      const phoneResp = await phone.save();
      const token = jwt.sign({ id: admin.id }, process.env.DB_URL, {
        expiresIn: 86400, // 24 hours
      });
      console.log(phoneResp);
      return res.status(200).json({ data: { phone: phoneResp.phone }, token });
    } catch (e) {
      return res.status(401).json({ data: "Error Message", e });
    }
  }

  try {
    const resp = await user.save();
    const token = jwt.sign({ id: admin.id }, process.env.DB_URL, {
      expiresIn: 86400, // 24 hours
    });
    console.log(resp);
    return res
      .status(200)
      .json({ data: { email: resp.email, username: resp.username }, token });
  } catch (e) {
    return res.status(401).json({ data: "Error", e });
  }
};
