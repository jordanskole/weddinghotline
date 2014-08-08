var express = require("express");
var app = express();
var moment = require('moment');
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
