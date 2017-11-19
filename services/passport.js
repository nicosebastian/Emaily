const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

//get cookie from user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//get user from cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,//ID for google service
      clientSecret: keys.googleClientSecret,//password for google service
      callbackURL: "/auth/google/callback"//url to verify transaction, this must match callback in api config at console.developer.google.com
      //proxy: true//allows proxies, could be avoided by putting specific domain on callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //he exists!
          done(null, existingUser); //why?
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
