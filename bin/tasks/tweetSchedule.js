'use strict';

var tweet = require( './tweet' );
var moment = require('moment');

//ツイート周りのスケジューリングはここでする
module.exports = function() {

  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  

  //-9時間換算で考える
  if ( hour === 8 && min === 45 ) {
  
    tweet( '定時退社時刻だよー　かえれるー？' );

  } else if( hour === 16 && min === 0 ) {

    //console.log( '10分！だよ！' );
    message = moment().utc().add(9, 'h').format("日付が変わってMM月DD日になったよー(´・ω・`)");
    tweet( message );
  }

};

