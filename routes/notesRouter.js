var express = require('express');
var router = express.Router();
Blog = require('../models/blog');
var passport = require('passport');
require('../config/passport') 

router.route('/')
    .get(isLoggedIn,function (req, res) {
        var context = {
            form: 'New Blog'
        }
        res.render('add', context);
    })
    .post(function (req, res) {
        var context = {
            // 'name' : req.body.name,
            'title': req.body.title,
            'content': req.body.content,
        }
        var blog = new Blog(context);
        blog.save();
        res.redirect('/');
        //console.log(profile);

    });

router.route('/logout')
    .get(function(req,res){
        req.logout();
        req.flash('error',"Succesfully logged out");
        res.redirect('/login');
    })
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/login');
}

module.exports = router;
