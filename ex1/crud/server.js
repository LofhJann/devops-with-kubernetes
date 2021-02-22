const express = require('express')
const app = express();
const port = 3001

app.listen(port, function() {
  console.log('Server started in port', port)
})

app.get('/', function (req, res) {
  res.send("Hello World!")
})