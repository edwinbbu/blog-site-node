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
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    process.nextTick(function () {
      User.findOne({ 'local.email': email }, function (err, user) {
        if (err)
          return done(err);
        if (user) {
          return done(null, false, req.flash('signupMessage', 'This email is already taken.'));
        }
        else {
          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);

          newUser.save(function (err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });

    });
  }));

passport.use('login', new LocalStratery({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
  function (req, email, password, done) {
    User.findOne({ 'local.email': email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, req.flash('loginMessage', "No User Found."));
      }
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', "Wrong Password"));
      }
      return done(null, user);
    });
  }
));