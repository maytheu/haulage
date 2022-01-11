const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token === undefined)
    return res.status(401).json({ success: false, data: "Access not allowed" });
  jwt.verify(token, process.env.DB_URL, (err, decode) => {
    if (err)
      return res.status(401).json({ success: false, data: "Token Error" });
    req.user = decode;
    next();
  });
};

module.exports = { verifyToken };
