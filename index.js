const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(express.static('public'));
app.use(bodyParser.json());

//デバッグするスクリプトをモジュールとして読み込む
const script = require('./script.js');

//読み込んだスクリプトをハンドラーとして定義
app.all('/', script);

//expressでサーバーを起動
app.listen(3000, function () {
  console.log('app listening on port 3000');
});
