const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.listen(port, function () {
  console.log("Listening to port", port)
})

var requests = 0

/* try {
  requests = fs.readFileSync('files/pingpong.txt')
} catch (e) {
  console.log(e)
} */

const pingpong = () => {
  return ++requests
}

/* app.get('/', function (req, res) {
  const pingpongs = pingpong()
  fs.writeFile('files/pingpong.txt', "" + pingpongs, function (e) {
    if (e) return console.log(e)
    console.log('Write successful!')
  })
  res.send("pong " + pingpongs)
}) */

app.get('/', function(req, res) {
  res.send("pong " + pingpong())
})