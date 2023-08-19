// Modules initialization
var express    = require('express');
var app        = express();
var bodyparser = require('body-parser');
var mongoose   = require('mongoose');
var routes     = require('./backend/routes.js');

// Configuration
mongoose.connect('mongodb://localhost/crud-users');
app.use(express.static(__dirname + '/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// Routes loading
routes.start(__dirname)
routes.principal(app);

// Server initialization
app.listen(3000);
console.log('Listening to port 3000');