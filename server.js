
// ** EXPRESS LIBRARY **
// imports express library from node_modules
const express = require("express")
// returns an instance object 'app' that we can use express with
const app = express()


// ** Mongo DB Configurations**
// connects this Node.js server to our Mongo database
// mongodb://localhost/whiteboard
// mongodb:// <fooAPI/URL> / <fooNameOfMongoDatabase>
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});

// // Set the structure of the document to send form here (server) to MongoDB (database)
// // and assign it to a collection in MongoDB
// const quizSchema = mongoose.Schema({title: String}, {collection: "quizzes"})
// // Envelop the schema in a 'model' and give it a unique identifier for this session.
// const quizModel = mongoose.model("QuizModel", quizSchema)
//
// quizModel.find()
//     .then(quizzes => console.log(quizzes))


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// import/ require other files in the directory
require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)

// listen at port 3000
// if you point the browser to port localhost:3000 you can interact with server
// run server.js on command line to start server with command 'node server.js'
app.listen(3000)
