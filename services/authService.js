import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import UserRepository from "../repository/userRepository.js"
import dotenv from 'dotenv';

dotenv.config();

const KEY = process.env.CLIENT_ID;
const SECRET = process.env.CLIENT_SECRET;
const CALLBACK_URL = 'http://localhost:3000/google/callback';

const googleAuth = () => {
    return new GoogleStrategy({
        clientID: KEY,
        clientSecret: SECRET,
        callbackURL: CALLBACK_URL,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const userCreated = await UserRepository.findOrCreateUser(profile)
            done(null, { 'id': userCreated.object })
        } catch (error) {
            done(error);
        }
    });
};

export default googleAuth;
