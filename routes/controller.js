import { Router } from 'express';
import passport from "../middleware/passport.js"
const router = Router();

router.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

router.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Login here</a>')
})

router.get('/profile', (req, res) => {
    if(req.session.passport){
        res.send('<h1>User is logged in!</h1><br> <a href="/logout">Logout</a>')
    }else{
        res.send('<h1>Failed to log in, go back to </h1> <a href="/login">login page</a>')
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/login');
    });
});


export default router