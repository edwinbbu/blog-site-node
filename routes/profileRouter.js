var express = require('express');
var router = express.Router();
var db=require('../config/database.js');
var User= require('../models/auth.js');
router.route('/')
    .get(function (req, res) {
        // User.find({},null,function(err,data){
        //     console.log(data[0]);
        // })
        context = {
            form: 'Profile Form'
        }
        res.render('profile', context);
    })

module.exports = router;
