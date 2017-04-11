var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// CONFIG
/*app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/'));*/





// RUN
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});