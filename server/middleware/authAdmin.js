const mongoose = require("mongoose");
const Admin = mongoose.model("admins");

module.exports = (req, res, next) => {
  let token = req.cookies.h_auth;

  Admin.findByToken(token, (err, admin) => {
    if (err) return res.status(401).send(err);
    if (!admin) {
      return res.status(401).send("User not found");
    }
    req.token = token;
    req.admin = admin;

    next();
  });
};
