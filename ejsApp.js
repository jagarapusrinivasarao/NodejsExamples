var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');

  app.get('/', function(req, res){
    res.render('index');
});
app.get('/about', function(req, res){
    res.render('about');
});
app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});
app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'UI Developer', hobbies: ['eating', 'fishing', 'sleeping']}
    res.render('profile', {person: req.params.name, data: data});
  });
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname +'/404.html')
});

app.listen(3000);