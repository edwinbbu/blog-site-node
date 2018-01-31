var express = require('express');
var path = require('path');
var parser = require('body-parser')
var app = express();

var port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static('static'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))

var router=express.Router();

// app.use(express.static('src/views'))
app.get('/',function(req,res){
    res.render('index');
});
app.get('/profile',function(req,res){
    res.render('profile');
});
app.post('/success',function(req,res){
    var profile={
        'name' : req.body.name,
        'age' : req.body.age
    }
    //console.log(profile);
    res.render('success', profile);
});
app.listen(port, function(error){
    console.log('running server on port '+port);
} );