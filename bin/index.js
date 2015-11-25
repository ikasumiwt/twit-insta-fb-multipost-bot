var app = require('../app');
var Twit = require('twit');
var CronJob = require("cron").CronJob;
var moment = require('moment');
var tweetSchedule = require( './tasks/tweetSchedule' );


var twit = new Twit({
  consumer_key: app.get('options').tw_key,
  consumer_secret: app.get('options').tw_secret,
  access_token: app.get('options').tw_token,
  access_token_secret: app.get('options').tw_token_secret
});

//herokuが勝手に切れないようにするためにとりあえずcronは3min毎ぐらいで動かしておく
var cronTime = '* */3 * * * *';

new CronJob({
  cronTime: cronTime,
  onTick: function () {

    main();
  },
  //自動でスタートさせておく
  start: true
});


//cronのメイン
function main() {

  tweetSchedule();
}


function tweet( message ){


  if( !message ) {
    message = moment().utc().add(9, 'h').format("いまMM月DD日 HH時mm分なんだよー");
    console.log(message);
  }


  twit.post('statuses/update', { status: message }, function(err, data, response) {
      //console.log('Tweet!');
  });
}
