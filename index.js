const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/faq', function (req, res) {
  res.send('Hi this is FAQ Page')
})

app.get('/about', function (req, res) {
  res.send('Hi this is ABOUT Page')
})

app.get('/contact_us', function (req, res) {
  res.sendFile(__dirname + '/contact_us.html')
})

app.post('/contact_us', function (req, res) {
  res.send(`Name: ${req.body.name} | Email: ${req.body.email} | Subject: ${req.body.subject} | Message: ${req.body.message}`)
})

app.get('/calculate', function (req, res) {
  res.sendFile(__dirname + '/calculate.html')
})

app.post('/calculate', function (req, res) {
  var number1 = parseInt(req.body.number1)
  var number2 = parseInt(req.body.number2)
  var result = number1 * number2

  res.send(`The result is ${result}`)
})

app.listen(3000, function () {
    console.log('This apps running on Port 3000')
})