var express = require('express');

var PORT = 8080;
var HOST = '0.0.0.0';

var app = express();

app.listen(PORT, HOST);
console.log('서버가 http://127.0.0.1:' + PORT + '에서 작동하고 있습니다.');
