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
            'name' : req.body.name,
            'age' : req.body.age
        }
        //console.log(profile);
        res.render('success', profile);
    });

module.exports= profileRouter;
