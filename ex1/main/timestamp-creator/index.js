const uuid = require('uuid')
const fs = require('fs')
const randomString = uuid.v4()
const express = require('express')
const app = express()
const PORT = 3001

const createString = () => {
  const ts = new Date().toISOString()
  return ts + ': ' + randomString
}

const writeToFile = () => {
  const ts = createString();
  fs.writeFile('files/timestamp.txt', ts, function (err) {
    if (err) return console.log(err)
    console.log(ts)
  })
}



setInterval(() => {
  createString();
}, 5000)