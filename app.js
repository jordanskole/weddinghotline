var express = require("express");
var app = express();
var moment = require('moment');
var https = require('https');
var phonetree = require('./phonetree.json');
var indextree = require('./index.json');


// we use this in heroku to set the directory
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

/*
 *
 *
 *
 */
app.get('/index', function(req, res){
  reciever = indextree[req.param('Digits')];
  res.set('Content-Type', 'text/xml');
  res.send('<Response><Redirect method="GET">' + reciever.url + '</Redirect></Response>');
});

/*
 *
 *
 *
 */
app.get('/forward', function(req, res) {

  // set the response to be an XML document
  res.set('Content-Type', 'text/xml');
  reciever = phonetree[req.param('Digits')];
  res.send('<Response><Say>Now calling ' + reciever.name +'</Say><Dial>' + reciever.number + '</Dial><Message to="' + req.param('Caller') + '">Hope you got the answers you needed. Here is '+reciever.name+'\'s number for safe keeping: ' + reciever.number +'</Message></Response>');

});

/*
 *
 *
 *
 */
app.get('/events', function(req, res) {

});

/*
 *
 * What's the weather like?
 *
 */
app.get('/weather', function(req, res){
  var weather = '';
  https.get('https://api.forecast.io/forecast/08cb6e69b1db76f992c08f8586e9cda1/44.7681,-85.6222', function(response){
    response.on('data', function (chunk){
        // chunk contains data read from the stream
        // - save it to content
        weather += chunk;
      });

    response.on( 'end' , function() {
      weather = JSON.parse(weather);
      // content is read, do what you want
      // set the response to be an XML document
      res.set('Content-Type', 'text/xml');
      res.send('<Response><Say>The weather is currently ' + weather.currently.summary +'. Over the next couple of hours you should expect ' + weather.hourly.summary + '</Say></Response>');
    });
  });
});

/*
 *
 *
 *
 */
app.get('/record', function(req, res){
  // set the response to be an XML document
  res.set('Content-Type', 'text/xml');
  res.send('');
});




// start 'er up!
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
