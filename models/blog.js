var mongoose = require('mongoose');
var BlogSchema = mongoose.Schema({
    title: String,
    content: String
    // date: String
});

var Blog = module.exports = mongoose.model('Blog', BlogSchema);

//module.exports = Blog;