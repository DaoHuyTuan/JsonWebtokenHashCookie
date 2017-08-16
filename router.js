const express = require('express');
const app = express();
const parser = require('body-parser').urlencoded({ extended: false });
const User = require('./User');
const queryDB = require('./db')

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',(req,res) => {
    queryDB('SELECT * FROM "Student"', (err, result) => {
            if (err) return console.log(err.toString());
            res.render('home',{mang:result.rows});
        });
})
app.get('/index',(req,res) => {
    queryDB('SELECT * FROM "Student"',(err,result) => {
        if(err) return res.send(err);
        res.render('home', { mang:result.rows });
    })
});

app.get('/signin',(req,res) => {
    res.render('signin');
});

app.get('/signup',(req,res) => {
    res.render('signup');
});




module.exports = app;
