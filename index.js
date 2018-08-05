var express = require('express');

var PORT = 8080;
var HOST = '0.0.0.0';

var app = express();
app.set('views', __dirname + '/templates'); // HTML 파일 연결
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/assets')); // 정적 파일 연결

app.listen(PORT, HOST);
console.log('서버가 http://127.0.0.1:' + PORT + '에서 작동하고 있습니다.');


app.get('/', (req, res) => {
  res.render('home.html');
});
