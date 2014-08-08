var express = require("express");
var app = express();
var moment = require('moment');
var phonetree = require('./phonetree.json');


// we use this in heroku to set the directory
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

app.get('/forward', function(req, res) {

  // set the response to be an XML document
  res.set('Content-Type', 'text/xml');
  reciever = phonetree[req.param('Digits')];
  res.send('<Response><Say>Now calling ' + reciever.name +'</Say><Dial>' + reciever.number + '</Dial><Message>Hope you got the answers you needed. Here is '+reciever.name+'\'s number for safe keeping: ' + reciever.number +'</Message></Response>');

});


// start 'er up!
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
