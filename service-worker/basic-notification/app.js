var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var FCM = require('fcm-push');
var app = express();

// CONFIG
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/public'));

var token = '';
var serverKey = 'AAAAiT6Ul-0:APA91bFpN8XZE5D6PadKsRYl69_szYkD0YO-g4GfFDe6Olhin9Rl90iX0bmLQowlb0-ZPEFK6U4BPI115OpPzGncd11FQ0Ux6umMQcSPe0HtEmRLJYlRKMsrYclF-eeSJSzBZblDqKWT'; // Replace with your server key (in cloud messaging)
var fcm = new FCM(serverKey);

// REQUESTS
app.post('/storeToken', function(req, res) {
    console.log('Token received: ' + req.body);
    token = req.body;
});

var message = {
    to: token,
    data: {
        test: 'testNotification'
    },
    notification: {
        title: 'Test notification',
        body: 'Received from server'
    }
}

app.get('/sendNotification', function(req, res) {
    console.log('Sending notification...');
    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
})

// RUN
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});