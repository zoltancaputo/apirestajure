const express = require('express')
const authmidleware = require('./midlewares/authMiddleware')
const protectedController = require('./controllers/protectedController')

const app = express()

app.get('/protected', authmidleware, protectedController.getprotectedData)

module.exports = app
