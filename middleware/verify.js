const User = require("../model/userSchema");

const verifySuperAdmin = (req, res, next) => {
  User.findById(req.user.id, (err, admin) => {
    if (err)
      return res
        .status(401)
        .json({ success: false, data: "Error verifying user" });
    if (!admin.isSuperAdmin)
      return res
        .status(401)
        .json({ success: false, data: "You can't perform this operation" });
    req.user = admin;
    next();
  });
};

const verifyEditorAdmin = (req, res, next) => {
  User.findById(req.user.id, (err, admin) => {
    if (err)
      return res
        .status(401)
        .json({ success: false, data: "Error verifying user" });
    if (admin.isSuperAdmin || admin.adminRole === 1) {
      req.user = admin;
      next();
    } else
      return res
        .status(401)
        .json({ success: false, data: "You can't perform this operation" });
  });
};

const verifyViewerAdmin = (req, res, next) => {
  User.findById(req.user.id, (err, admin) => {
    if (err)
      return res
        .status(401)
        .json({ success: false, data: "Error verifying user" });
    if (admin.isSuperAdmin || admin.adminRole === 1 || admin.adminRole === 0) {
      req.user = admin;
      next();
    } else
      return res
        .status(401)
        .json({ success: false, data: "You can't perform this operation" });
  });
};

module.exports = { verifySuperAdmin, verifyEditorAdmin, verifyViewerAdmin };
