const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const token = require("./token");
const User = require("../model/userSchema");

passport.serializeUser((user, done) => {
  const key = token(user._id);
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      proxy: true,
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await User.findOne({ profileId: profile.id });
      if (!existingUser) {
        const user = new User({
          profileId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
        });
        user.save();
        return done(null, user);
      }
      return done(null, existingUser);
    }
  )
);

passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/api/auth/facebook/callback",
      proxy: true,
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await User.findOne({ profileId: profile.id });
      if (!existingUser) {
        const name = profile.displayName.split(" ");
        const user = new User({
          profileId: profile.id,
          firstName: name[0],
          lastName: name[1],
          username: profile.username,
        });
        user.save();
        return done(null, user);
      }
      return done(null, existingUser);
    }
  )
);
