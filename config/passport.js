var passport = require('passport');
var LocalStratery = require('passport-local').Strategy;

var User = require('../models/auth.js');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use('signup', new LocalStratery({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, username, password, done) {
    process.nextTick(function () {
      User.findOne({ 'username': username }, function (err, user) {
        if (err)
          return done(err);
        if (user) {
          return done(null, false, req.flash('signupMessage', 'This username is already taken.'));
        }
        else {
          var newUser = new User();
          newUser.email = req.body.email;
          newUser.name = req.body.name;
          newUser.username = username;
          newUser.password = newUser.generateHash(password);

          newUser.save(function (err) {
            if (err){
              throw err;
            }
            console.log(success);  
            return done(null, newUser);
          });
        }
      });

    });
  }));

passport.use('login', new LocalStratery({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, username, password, done) {
    console.log(req.body);
    console.log(username+":"+password);
    User.findOne({ 'username': username }, function (err, user) {
      if (err) {
        console.log("db error");
        return done(err);
      }
      console.log(user);
      if (!user) {
        console.log("err1");
        return done(null, false, req.flash('loginMessage', "No User Found."));
      }
      if (!user.validPassword(password)) {
        console.log("err2");
        return done(null, false, req.flash('loginMessage', "Wrong Password"));
      }
      return done(null, user);
    });
  }
));