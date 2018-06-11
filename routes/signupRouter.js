var express = require('express');
var signupRouter = express.Router();
var User= require('../models/auth.js');
var passport = require('passport');
require('../config/passport') 

signupRouter.route('/')
    .get(function (req, res) {
        res.render('signup');
    })
    .post(passport.authenticate('signup',{
       successRedirect: '/notes',
       failureRedirect: '/signup',
       failureFlash: true
    }));

module.exports = signupRouter;
