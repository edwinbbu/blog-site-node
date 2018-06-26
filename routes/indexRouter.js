var express = require('express');
var indexRouter = express.Router();
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
            //console.log(context[0]);
            res.render('index', data);
        });
    });
indexRouter.route('/delete')
    .post(function (req, res) {
        console.log(req.body);
        Blog.findByIdAndRemove(req.body.id, (err, item) => {
            if (err) return res.status(500).send(err);
            console.log("Blog Deleted");
        });
        res.redirect('/');
    });

module.exports = indexRouter;