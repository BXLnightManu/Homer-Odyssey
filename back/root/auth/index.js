const { signUpRouter } = require('./auth');
const { signInRouter } = require('./auth');

function registerAuthRoutes(app) {
    app.use('/auth', signUpRouter);
    app.use('/auth', signInRouter);
};

module.exports = {
    registerAuthRoutes
}