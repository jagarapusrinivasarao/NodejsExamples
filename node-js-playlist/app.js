var express = require('express');
var todocontroller = require('./controllers/todocontroller');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//statics files
app.use(express.static('./public'));

//fire controller
todocontroller(app);

// listen to port
app.listen(3000);
