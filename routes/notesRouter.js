var express = require('express');
var router = express.Router();
var multer = require('multer');
const { check, validationResult } = require('express-validator/check');

Blog = require('../models/blog');
require('../config/passport')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });
router.route('/')
    .get(isLoggedIn, function (req, res) {
        var context = {
            form: 'New Blog'
        }
        res.render('add', context);
    })
    .post(upload.any(), isLoggedIn,
        [check('title').not().isEmpty(),
        check('content').not().isEmpty()], function (req, res) {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                req.flash('error', "Provide details for the blog");
                res.redirect('/notes');
            }
            else {
                if (req.files.length > 0) {
                    let filePath = req.files[0].path.split('/');
                    let fileurl = filePath[1] + '/' + filePath[2];
                    var img = {
                        name: req.files[0].originalname,
                        path: fileurl
                    }
                }
                else {
                    var img = {
                        name: null,
                        path: null
                    }
                }
                check('username').isEmail(),
                    check('password').isLength({ min: 5 })
                var context = {
                    // 'name' : req.body.name,
                    'title': req.body.title,
                    'content': req.body.content,
                    'creator': req.user.name,
                    'img': img
                }
                var blog = new Blog(context);
                blog.save();
                res.redirect('/');
            }

        });

router.route('/logout')
    .get(function (req, res) {
        req.logout();
        req.flash('error', "Succesfully logged out");
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
