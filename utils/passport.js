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
      console.log(profile, "passport");
      //   const existingUser = await User.findOne({ profileId: profile.id });
      //   if (!existingUser) {
      //     const user = new User();
      //     user.profileId = profile.id;
      //     user.name = profile.displayName;
      //     user.email = profile.emails[0].value;
      //     user.token = jwt.sign(user._id.toHexString(), process.env.SECRET);
      //     user.save();
      //     done(null, user);
      //   }
    }
  )
);
