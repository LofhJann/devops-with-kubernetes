const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.listen(port, function () {
  console.log("Listening to port", port)
})

var requests = 0

const pingpong = () => {
  return ++requests
}

app.get('/', function (req, res) {
  fs.writeFile('files/pingpong.txt')
  res.send("pong " + pingpong())
})