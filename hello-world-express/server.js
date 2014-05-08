var express = require('express');
var http = require('http');
var redirect = require("express-redirect");

var app = express();
redirect(app);

//middleware
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);
//app.static(__dirname + '/public')



app.get('/LLNL', function(req, res) {

    //res.send('<head><LINK href="./build/style.css" rel="stylesheet" type="text/css"></head><body><div class = "lab-title"><h1>Lawrence Livermore National Lab </h1></div>' +
    //  '<div class="lab-list"><h2>Other Labs</h2><ul><li><a href="./CERN">CERN</a></li><li><a href="./Los-Alamos-National-Lab">Los Alamos National Lab</a></li><li><a href="./">Home</li></ul></div></body>'
    //app.redirect("https://www.google.de/?q=:query(Nyan+Cat)");
    res.redirect('/LLNL.html');

});

app.get('/CERN', function(req, res) {
    //res.send('<head><LINK href="./build/style.css" rel="stylesheet" type="text/css"></head><body><div class = "lab-title"><h1>European Organization for Nuclear Research (CERN)</h1></div>' +
    //   '<div class="lab-list"><h2>Other Labs</h2><ul><li><a href="./LLNL">Lawrence Livermore National Lab</a></li><li><a href="./Los-Alamos-National-Lab">Los Alamos National Lab</a></li><li><a href="./">Home</li></ul></div></body>'
    //);
    res.redirect('CERN.html');
});

app.get('/Los-Alamos-National-Lab', function(req, res) {
    //res.send('<head><LINK href=".build/style.css" rel="stylesheet" type="text/css"></head><body><div class = "lab-title"><h1>Los Alamos National Lab</h1></div>' +
    //   '<div class="lab-list"><h2>Other Labs</h2><ul><li><a href="./CERN">CERN</a></li><li><a href="./LLNL">Lawrence Livermore National Lab</a></li><li><a href="./">Home</li></ul></div></body>'
    //);
    res.redirect('Los-Alamos-National-Lab.html');
});


var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('server is running on port ', app.get('port'));
});
