var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String
});

var User = module.exports = mongoose.model('User', UserSchema);