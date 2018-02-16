var express = require('express'),
    notesRouter = express.Router();

notesRouter.route('/')
    .get(function(req,res){
            context={
                form:'New Blog'
            }
            res.render('add',context);
         })
    .post(function(req,res){
        var context={
            // 'name' : req.body.name,
            'title' : req.body.title,
            'content': req.body.content,
        }
        //console.log(profile);
        res.render('notes', context);
    });

module.exports= notesRouter;
