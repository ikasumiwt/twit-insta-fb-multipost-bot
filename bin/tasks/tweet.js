'use strict';

var Twit = require('twit');
var moment = require('moment');


var twit = new Twit({
  consumer_key: app.get('options').key,
  consumer_secret: app.get('options').secret,
  access_token: app.get('options').token,
  access_token_secret: app.get('options').token_secret
});


var tweet = funciton( message ) {


  if( !message ) {

    message = moment().utc().add(9, 'h').format("いまMM月DD日 HH時mm分なんだよー");
    console.log(message);
  }


  twit.post('statuses/update', { status: message }, function(err, data, response) {
      //console.log('Tweet!');
  });
};


module.exports = tweet;
