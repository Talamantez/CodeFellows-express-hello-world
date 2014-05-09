var express = require('express');
var http = require('http');
var redirect = require("express-redirect");

var app = express();
redirect(app);

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

app.get('/LLNL', function(req, res) {
    res.redirect('/LLNL.html');

});

app.get('/CERN', function(req, res) {
    res.redirect('CERN.html');
});

app.get('/Los-Alamos-National-Lab', function(req, res) {
    res.redirect('Los-Alamos-National-Lab.html');
});


var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('server is running on port ', app.get('port'));
});
