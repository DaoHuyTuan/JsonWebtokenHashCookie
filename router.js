const express = require('express');
const app = express();
const User = require('./User');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',(req,res) => {
    
    res.render('hello');
});

app.get('/signin',(req,res) => {
    res.render('signin');
});

app.get('/signup',(req,res) => {
    res.render('signup');
});




module.exports = app;
