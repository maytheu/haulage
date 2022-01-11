const express = require("express");
const router = express.Router();

const {
  newAdmin,
  allUsers,
  admins,
} = require("../routeController/userController");
const { verifyToken } = require("../middleware/auth");
const {
  verifySuperAdmin,
  verifyEditorAdmin,
  verifyViewerAdmin,
} = require("../middleware/verify");

router.post("/new_admin", verifyToken, verifySuperAdmin, newAdmin);
router.get("/users", verifyToken, verifyViewerAdmin, allUsers);
router.get("/admins", verifyToken, verifyEditorAdmin, admins);

module.exports = router;
