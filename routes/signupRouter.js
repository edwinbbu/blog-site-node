var express = require('express'),
    signupRouter = express.Router();

signupRouter.route('/')
    .get(function (req, res) {
        res.render('signup');
    })
    .post(function (req, res) {
        var profile = {
            'email': req.body.email,
            'name': req.body.name,
            'username': req.body.username,
            'password': req.body.password
        }
        console.log(profile);
        res.render('success', profile);
    });

module.exports = signupRouter;
