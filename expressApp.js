var express = require('express');

var app = express();
app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//     res.send('this is Home Page');
// });
// app.get('/contact', function(req, res){
//     res.send('this is Contact Page');
// });
/* With Id */
// app.get('/profile/:id', function(req, res){
//   res.send('your request to see a profile with the id' + req.params.id);
// });
/* With name */
// app.get('/profile/:name', function(req, res){
//     res.send('your request to see a profile with the name' + req.params.name);
//   });
  /* html files routing */
  app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
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