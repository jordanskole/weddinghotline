var express = require("express");
var app = express();
var moment = require('moment');


// we use this in heroku to set the directory
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/public'));

app.get('/forward', function(req, res) {

  // set the response to be an XML document
  res.set('Content-Type', 'text/xml');

  // if the user pressed #1
  if(req.param == 1) {
    // dial ashley's phone number
    res.send('<Response><Dial>248-765-5225</Dial></Response>');
  }

  if(req.param('Digit') == 2) {
    // dial ashley's phone number
    res.send('<Response><Dial>517-230-1212</Dial></Response>');
  }

  if(req.param('Digit') == 3) {
    // dial ashley's phone number
    res.send('<Response><Dial>248-709-5552</Dial></Response>');
  }

  if(req.param('Digit') == 4) {
    // dial ashley's phone number
    res.send('<Response><Dial>248-881-7460</Dial></Response>');
  }

    // allow heather and I to record a new greeting.
  if(req.param('Digit') == 9) {
    res.send('<Response><Say>With great power comes great responsibility</Say></Response>');
  }

  // got something else, return them to the main menu

});


// start 'er up!
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
