const { User } = require('../../../db/models');

function signUp(req, res, next) {
    if(!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname || Object.keys(req.body).length < 4) {
        res.json({
            flash: 'The payload is not valid. Maybe required field(s) are missing'
        });
        return;
    }
    if(typeof req.body.firstname !=="string") {
        res.json({
            flash: 'Must provide a valid firstname !'
        });
        return;
    }
    if(typeof req.body.lastname !=="string") {
        res.json({
            flash: 'Must provide a valid lastname !'
        });
        return;
    }
    const { email, password, firstname, lastname } = req.body;
    const user = new User({email, password, firstname, lastname});
    user
        .save()
        .then(user => {
            res.status(200).json({open: true, variant: "success", flash: `${user.firstname} ${user.lastname} has been signed up!`});
        })
        .catch(err => {
            res.status(500).json({open: true, variant: "error", flash: err.message || "REGISTRATION FAILED" });
        })
};

function signIn(req, res, next) {
    res.send('I am in POST signin');
};

module.exports = {
    signUp,
    signIn
};