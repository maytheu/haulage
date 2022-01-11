const express = require("express");
const router = express.Router();
const passport = require("passport");

const { verifyToken } = require("../middleware/auth");
const {
  signUp,
  signIn,
  facebook,
  google,
  logout,
} = require("../routeController/authController");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "api/auth/facebook",
    failureMessage: true,
  }),
  facebook
);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "api/auth/google",
    failureMessage: true,
  }),
  google
);

router.get("/logout", verifyToken, logout);

module.exports = router;
