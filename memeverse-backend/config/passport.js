const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails, photos } = profile;
      let user = await User.findOne({ googleId: id });
      if (!user) {
        user = await User.create({
          googleId: id,
          name: displayName,
          email: emails[0].value,
          profilePicture: photos[0].value,
        });
      }
      done(null, user);
    }
  )
);
