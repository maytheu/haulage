const {
  param,
  verifyEmail,
  verifyPassword,
  verifyPhone,
  phoneLength,
} = require("../utils/verify");
const User = require("../model/userSchema");
const Phone = require("../model/phoneSchema");
const token = require("../utils/token");

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
    if (phoneLength(email)) {
      try {
        user = new User({ password });
        const resp = await user.save();
        const phone = new Phone({ id: resp._id, phone: email });
        const phoneResp = await phone.save();
        const key = token(resp.id);
        return res
          .status(200)
          .json({ data: { phone: phoneResp.phone }, token: key });
      } catch (e) {
        return res.status(401).json({
          data: "Error Message",
          e,
        });
      }
    } else {
      return res.status(400).json({ data: "Invalid phone number" });
    }
  }

  try {
    const resp = await user.save();
    const key = token(resp._id);
    return res.status(200).json({
      data: { email: resp.email, username: resp.username },
      token: key,
    });
  } catch (e) {
    return res.status(401).json({ data: "Error", e });
  }
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  if (param(email) || param(password))
    return res.status(400).json({ data: "Incomplete request" });
  let obj = {};
  const isEmail = verifyEmail(email);
  if (isEmail) {
    obj = { email };
  } else if (verifyPhone(email) && phoneLength(email)) {
    Phone.login(email, (err, phone) => {
      if (err) return res.status(401).json({ data: err });
      User.phoneLogin(phone.id, password, (err, user) => {
        if (err) return res.status(401).json({ data: err });
        const key = token(user._id);
        res.status(200).json({
          data: { phone: phone.phone, admin: user.isAdmin },
          token: key,
        });
      });
    });
    return;
  } else {
    obj = { username: email };
  }
  User.login(obj, password, (err, user) => {
    if (err) return res.status(401).json({ data: err });
    const key = token(user._id);
    res.status(200).json({
      data: {
        email: user.email,
        username: user.username,
        adminRole: user.adminRole,
        super: user.isSuperAdmin,
      },
      token: key,
    });
  });
};

exports.facebook = (req, res) => {
  const user = req.session.passport.user;
  const key = token(user.id);
  res.status(200).json({
    data: { email: user.email, name: `${user.lastName} ${user.firstName}` },
    token: key,
  });
};

exports.google = (req, res) => {
  const user = req.session.passport.user;
  const key = token(user.id);
  res.status(200).json({
    data: { email: user.email, name: `${user.lastName} ${user.firstName}` },
    token: key,
  });
  // .redirect("/");
};

exports.logout = (req, res) => {
  req.logout();
  return res.status(200).json({ token: "" });
};
