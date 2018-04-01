var express = require('express'),
    notesRouter = express.Router();
Blog = require('../models/blog');

notesRouter.route('/')
    .get(function (req, res) {
        context = {
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

module.exports = notesRouter;
