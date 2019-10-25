function signUp(req, res, next) {
    res.send('I am in POST signup');
};

function signIn(req, res, next) {
    res.send('I am in POST signin');
};

module.exports = {
    signUp,
    signIn
};