const mongoose = require("mongoose");

const Admin = mongoose.model("admins");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome to Haulage");
  });

  //register route
  app.post("/api/admin/register", (req, res) => {
    const data = new Admin({
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      lastname: req.body.lastname,
      firstname: req.body.firstname,
    });

    data.save((err, admin) => {
      if (err) return res.status(400).json({ success: false });
      res.status(200).json({ success: true });
    });
  });
};
