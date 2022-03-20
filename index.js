const express = require('express');
const app = express();

//register ejs as the view engine
app.set('view engine', 'ejs');

//listen for request on port 3000
app.listen(3000);

//static files
app.use(express.static('public'));

//Main page
app.get('/', (req, res) => {
    res.render('index', {page: "home"});
});

app.get('/about', (req, res) => {
    res.render('about', {page: "about"})
});

app.get('/contact', (req, res) => {
    res.render('contact', {page: "contact"})
});

app.get('/kupa', (req, res) => {
    res.send('KUPA KUPA');
});

app.get('/photo/add', (req, res) => {
    res.render('add', {page: "add"});
});

//404
app.use((req,res) => {
    res.render('404', {page:""});
});