var express = require('express');
var signupRouter = express.Router();
var User= require('../models/auth.js');

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
        var user = new User(profile);
        user.save();
        res.render('success', profile);
    });

module.exports = signupRouter;
