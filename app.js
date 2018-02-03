var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/json', function (req, res){
    console.log("GET the Json");
    res.json({"jsonData" : true});
});

app.get('/file', function (req, res){
    console.log("GET the Json");
    res.sendFile(path.join(__dirname, "app.js"));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
console.log("magic happens on port " + port);
});