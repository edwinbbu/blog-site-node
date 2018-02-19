var express = require('express'),
    notesRouter = express.Router();
    Blog = require('../models/blog');

notesRouter.route('/')
    .get(function(req,res){
            context={
                form:'New Blog'
            }
            res.render('add',context);
         })
    .post(function(req,res){
        var context = {
            // 'name' : req.body.name,
            'title': req.body.title,
            'content': req.body.content,
        }
        var blog=new Blog(context);
        blog.save();
        res.redirect('./all');
        //console.log(profile);
        
    });
notesRouter.route('/all')
    .get(function (req, res) {
        Blog.find({}, function (err, context) {
            if (err) {
                console.log(err);
            }
            //console.log(context[0].title);
            //console.log(typeof(context));
            var data={
                context: context
            }
            res.render('notes', data);
        });
    });

module.exports= notesRouter;
