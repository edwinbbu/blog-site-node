var express = require('express'),
    indexRouter = express.Router();
Blog = require('../models/blog');

indexRouter.route('/')
    .get(function (req, res) {
        Blog.find({}, function (err, context) {
            if (err) {
                console.log(err);
            }
            var data = {
                context: context
            }
            res.render('notes', data);
        });
    });

module.exports = indexRouter;