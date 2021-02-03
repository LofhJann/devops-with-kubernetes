const uuid = require('uuid');
const randomString = uuid.v4();
const express = require('express')

const app = express();
const port = 3000

const printString = () => {
  const ts = new Date().toISOString()
  return ts + ': ' + randomString;
}

app.listen(port, function() {
  console.log('Server started in port', port)
})

app.get('/', function (req, res) {
  res.send(printString())
})
