var express = require('express'),
    loginRouter = express.Router();

loginRouter.route('/')
    .get(function (req, res) {
        res.render('login');
    })
    .post(function (req, res) {
        var profile = {
            'username': req.body.username,
            'password': req.body.password
        }
        res.render('success', profile);
    });

module.exports = loginRouter;
