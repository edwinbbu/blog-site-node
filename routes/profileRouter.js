var express = require('express'),
    profileRouter = express.Router();

profileRouter.route('/')
    .get(function(req,res){
            context={
                form:'Profile Form'
            }
            res.render('profile',context);
         })
    .post(function(req,res){
        var profile={
            'email' : req.body.email,
            'password' : req.body.password
        }
        //console.log(profile);
        res.render('success', profile);
    });

module.exports= profileRouter;
