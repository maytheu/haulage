const mongoose = require("mongoose");

const Admin = mongoose.model("admins");

const authAdmin = require("../middleware/authAdmin.js");

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
      if (err) return res.status(401).send(err);
      res.status(200).json({ success: true });
    });
  });

  //login route with email and password
  app.post("/api/admin/login", (req, res) => {
    Admin.getAuthenticated(
      req.body.email,
      req.body.password,
      (err, admin, reason) => {
        if (err) return res.status(401).send(err);
        //user is valid
        if (admin) {
          admin.generateToken((err, admin) => {
            if (err) return res.status(401).send(err);
            return res
              .cookie("h_auth", admin.token)
              .status(200)
              .json({ success: true, admin });
          });
        }
        //admin not present due to the following reason
        let reasons = Admin.failedLogin;
        switch (reason) {
          case reasons.NOT_FOUND:
          case reasons.PASSWORD_INCORRECT:
            return res.status(401).send("Incorrect email or password");
          case reasons.MAX_ATTEMPTS:
            //NOFICATION OF ACCOUNT LOCK
            return res.status(401).send("Check your email for notification");
        }
      }
    );
  });

  //authentication route to check if the user is loged in
  app.get("/api/admin/auth", authAdmin, (req, res) => {
    res.status(200).json({
      isAuth: true,
      isAdmin: true,
    });
  });

  //update profle
  app.post("/api/admin/update", authAdmin, (req, res) => {
    Admin.findByIdAndUpdate(
      { _id: req.admin._id },
      { $set: req.body },
      { new: true },
      (err, admin) => {
        if (err) return res.status(401).send(err);
        return res.status(200).json({ success: true, admin });
      }
    );
  });

  //view admin profile 
  app.get("/api/admin/view", authAdmin, (req, res) => {
    Admin.findOne({ _id: req.admin._id }, (err, admin) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send({ success: true, admin });
    });
  });

  app.get("/api/admin/logout", authAdmin, (req, res) => {
    Admin.findByIdAndUpdate(
      { _id: req.admin._id },
      { token: "" },
      (err, admin) => {
        if (err) return res.status(401).send(err);
        return res.status(200).json({ success: true });
      }
    );
  });
};
