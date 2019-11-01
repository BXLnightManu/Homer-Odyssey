const express = require('express');
const passport = require('passport');
const signUpRouter = express.Router();
const signInRouter = express.Router();
const authRouter = express.Router();
const { auth, profile } = require('./handlers');

signUpRouter.post('/signup', auth.signUp);
signInRouter.post('/signin', auth.signIn);
authRouter.get('/profile', passport.authenticate('jwt', { session:  false }), profile.getProfile);

module.exports = {
    signUpRouter,
    signInRouter,
    authRouter
}