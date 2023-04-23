import { Router } from 'express';
import passport from "../middleware/passport.js"
import login from "../middleware/login.js"
const router = Router();

router.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

// router.get('/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function (req, res) {
//         // res.session.isLoggedIn = { 'id': 'smellyhobo' }
//         res.send('/profile');
//     });

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

router.get('/login', (req, res) => {
    res.send('<a href=/auth/google>Login here</a>')
})

router.get('/profile', (req, res) => {
    res.send('<h1>User is logged in!</h1>')
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/login');
    });
});


export default router