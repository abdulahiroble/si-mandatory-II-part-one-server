import passport from "passport"
import googleAuth from '../services/authService.js';

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
    done(null, { 'id': id });
});

passport.use('google', googleAuth());

export default passport