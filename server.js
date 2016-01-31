var express = require('express');

var site = require('./site');
var post = require('./post');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended: true
}));




app.get('/', site.mainpage);




app.listen(3000, '0.0.0.0', function() {
    console.log('listening for requests send to port 3000');
});