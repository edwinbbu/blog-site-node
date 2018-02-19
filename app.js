//Imports
var express = require('express');
var path = require('path');
var parser = require('body-parser')
var cookieParser=require('cookie-parser');
var mongo=require('mongodb');
var mongoose=require('mongoose');
var passport=require('passport');
var session=require('express-session');

//database connection
mongoose.connect('mongodb://localhost/server')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
        // we're connected!
        console.log("Database connected");
});

// basic setup
var app = express();
var port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static('static'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }))

// require files
var profileRouter=require('./routes/profileRouter');
var notesRouter=require('./routes/notesRouter');
// app.use(express.static('src/views'))



app.get('/',function(req,res){
    res.render('index');
});


app.use('/profile', profileRouter);
app.use('/notes', notesRouter);
// app.get('/profile',function(req,res){
//     res.render('profile');
// });
// app.post('/success',function(req,res){
//     var profile={
//         'name' : req.body.name,
//         'age' : req.body.age
//     }
//     //console.log(profile);
//     res.render('success', profile);
// });
app.listen(port, function(error){
    console.log('running server on port '+port);
} );