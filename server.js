// imports express library from node_modules
const express = require("express")
// returns an instance object 'app' that we can use express with
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// import/ require other files in the directory
require("./services/quizzes-service")(app)
require("./services/questions-service")(app)

// listen at port 3000
// if you point the browser to port localhost:3000 you can interact with server
// run server.js on command line to start server with command 'node server.js'
app.listen(3000)
