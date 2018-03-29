const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

require('./app/routes')(app, {});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/cascade', function(req, res) {
  res.sendFile(path.join(__dirname + '/cascade.html'))
});

app.get('/multiple', function(req, res) {
  res.sendFile(path.join(__dirname + '/multiple.html'))
});


app.listen(port, () => {
  console.log('We are live on ' + port);
});


// npm run dev
// http://localhost:8080/api/states?startswith=b
// http://localhost:8080/

