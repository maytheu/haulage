const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  signUp,
  signIn,
  facebook,
  google,
} = require("../routeController/userControler");

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

module.exports = router;
