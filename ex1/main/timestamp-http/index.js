const express = require('express')
const app = express()
const fs = require('fs')

const PORT = 3000

const returnFileContents = (path) => {
  try {
    return fs.readFileSync(path).toString()
  } catch (e) {
    console.log(e)
  }
}

app.listen(PORT, function () {
  console.log('App running in port', PORT)
})

app.get('/', function (req,res) {
  res.write(returnFileContents('files/timestamp.txt'))
  res.end()
})