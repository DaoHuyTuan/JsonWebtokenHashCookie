const express = require('express');
const app = express();
const parser = require('body-parser').urlencoded({ extended: false });
const User = require('./User');
const queryDB = require('./db')

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/', async (req,res) => {  
     await queryDB('SELECT * FROM "Student"')
     .then((data) => res.render('home',{mang:data.rows}) )
     .catch((err) => console.log("err"));
          
});
app.get('/index',async (req,res) => {
    await queryDB('SELECT * FROM "Student"')
    .then((data) => res.render('home',{mang:data.rows}) )
    .catch((err) => console.log("err"));
});

app.get('/signin',(req,res) => {
    res.render('signin');
});

app.get('/signup',(req,res) => {
    res.render('signup');
});

app.post('/signup',parser,async (req,res) => {
    const {email,password} = req.body;
    const user = new User(email,password);
    await user.signUp()
    .then(() => res.send("dang ky thanh cong"))
    .catch(() => res.send("email da ton tai"));
});

app.post('/signin',parser , async (req,res) => {
    const {email,password} = req.body;
    const signInUser = new User(email,password);
    
    
    // .then(result => res.send("dang nhap thanh cong"))
    // .catch(err => res.send("dang nhap that bai"));
    try {
        const user = await signInUser.signIn()
        res.send("đăng nhập thành công");
    } catch (error) {
        //res.send("dang nhap that bai" + " " +error.toString());
        res.render('error',{error:error});
    }
   
})


module.exports = app;
