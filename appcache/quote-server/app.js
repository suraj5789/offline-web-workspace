var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// CONFIG
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public'));


// REQUESTS
app.post('/quote', function(req, res) {
    
    console.log('quote post ' + req.body.firstName + ' ::: ' + req.body.lastName);
    processData(req.body);
    res.send(generateQuote(req.body.firstName));
});


// HELPERS
function processData(data) {
    // In real app there will be a lot more logic
    console.log(data);
}

function generateQuote(name) {
    // In real app there will be quote calculation logic
    // For example purposes we just return an amount of 300 every time
    return 'Hi, ' + name + ' we got quote for you, which is 300';
}


// RUN
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});