var express = require('express');
var app = express();

// 環境変数から Titter アプリケーションのキー等を取得
var options = {
  tw_key: process.env.BOT_TWITTER_KEY,
  tw_secret: process.env.BOT_TWITTER_SECRET,
  tw_token: process.env.BOT_TWITTER_TOKEN,
  tw_token_secret: process.env.BOT_TWITTER_TOKEN_SECRET
};


app.set('options', options);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send('This is Twitter-bot application.')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

module.exports = app;
