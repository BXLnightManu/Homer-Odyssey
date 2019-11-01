const { signUpRouter, signInRouter, authRouter } = require('./auth');

function registerAuthRoutes(app) {
    app.use('/auth', signUpRouter);
    app.use('/auth', signInRouter);
    app.use('/', authRouter);
};

module.exports = {
    registerAuthRoutes
}