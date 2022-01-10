const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (id) =>
  jwt.sign({ id }, process.env.DB_URL, {
    expiresIn: 86400, // 24 hours
  });
