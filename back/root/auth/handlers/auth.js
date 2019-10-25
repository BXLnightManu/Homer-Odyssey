const { User } = require('../../../db/models');

function signUp(req, res, next) {
    console.log(typeof req.body.firstname);
    if(!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname || Object.keys(req.body).length < 4) {
        res.json({
            ok: false,
            payload: 'The payload is not valid. Maybe required field(s) are missing'
        });
        return;
    }
    if(typeof req.body.firstname !=="string") {
        res.json({
            ok: false,
            payload: 'Must provide a valid firstname !'
        });
        return;
    }
    if(typeof req.body.lastname !=="string") {
        res.json({
            ok: false,
            payload: 'Must provide a valid lastname !'
        });
        return;
    }
    const { email, password, firstname, lastname } = req.body;
    const user = new User({email, password, firstname, lastname});
    user
        .save()
        .then(user => {
            res.json({ ok: true, payload: user });
        })
        .catch(err => {
            res.json({ok: false, payload: err.message || "REGISTRATION FAILED" });
        })
};

function signIn(req, res, next) {
    res.send('I am in POST signin');
};

module.exports = {
    signUp,
    signIn
};