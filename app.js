import express from 'express';
import controller from './routes/controller.js'
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import passport from "passport"
import session from "express-session"

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 20 * 60 * 1000 } // 30 minutter
}));

app.use(controller)
app.use(passport.initialize())
app.use(passport.session())

dotenv.config();
connectDB()

const PORT = 3000;

app.listen(PORT, () => { console.log(`server are listening on port ${PORT}`) })