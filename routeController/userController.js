const { verifyPassword, param, verifyEmail } = require("../utils/verify");
const User = require("../model/userSchema");

exports.newAdmin = async (req, res) => {
  const { email, password, role } = req.body;
  if (param(email) || param(password))
    return res.status(400).json({ data: "Incomplete request" });
  if (!verifyPassword(password)) {
    return res.status(406).json({ data: "Password too weak" });
  }
  if (param(role)) {
    role = 0;
  }
  const isEmail = verifyEmail(email);
  let user;
  if (isEmail) {
    user = new User({ email, password, adminRole: role, isAdmin: true });
  } else {
    user = new User({
      username: email,
      password,
      adminRole: role,
      isAdmin: true,
    });
  }
  try {
    const resp = await user.save();
    return res.status(200).json({
      success: true,
      data: {
        email: resp.email,
        username: resp.username,
        role: resp.adminRole,
      },
    });
  } catch (e) {
    return res.status(401).json({ success: false, data: "Error", e });
  }
};

exports.allUsers = (req, res, next) => {
  User.find(
    { isAdmin: false },
    "username email firstName lastName", //user details to show
    (err, user) => {
      if (err)
        return res
          .status(400)
          .json({ success: false, data: "Error fetching users", e });
      return res.status(200).json({ success: true, data: user });
    }
  );
};

exports.admins = (req, res, next) => {
  User.find(
    { isAdmin: true },
    "username email firstName lastName adminRole", //user details to show
    (err, user) => {
      if (err)
        return res
          .status(400)
          .json({ success: false, data: "Error fetching users", e });
      return res.status(200).json({ success: true, data: user });
    }
  );
};
