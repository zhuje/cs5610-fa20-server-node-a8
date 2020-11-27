//
// // ** EXPRESS LIBRARY **
// // imports express library from node_modules
// const express = require("express")
// // returns an instance object 'app' that we can use express with
// const app = express()
//
//
// // ** Mongo DB Configurations**
// // connects this Node.js server to our Mongo database
// // mongodb://localhost/whiteboard
// // mongodb:// <fooAPI/URL> / <fooNameOfMongoDatabase>
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});
//
// // // Set the structure of the document to send form here (server) to MongoDB (database)
// // // and assign it to a collection in MongoDB
// // const quizSchema = mongoose.Schema({title: String}, {collection: "quizzes"})
// // // Envelop the schema in a 'model' and give it a unique identifier for this session.
// // const quizModel = mongoose.model("QuizModel", quizSchema)
// //
// // quizModel.find()
// //     .then(quizzes => console.log(quizzes))
//
//
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
//
// // import/ require other files in the directory
// require("./controllers/quiz.controller.server")(app)
// require("./controllers/question.controller.server")(app)
//
// // listen at port 3000
// // if you point the browser to port localhost:3000 you can interact with server
// // run server.js on command line to start server with command 'node server.js'
// app.listen(3000)


// ** EXPRESS LIBRARY **
// imports express library from node_modules
const express = require("express")
// returns an instance object 'app' that we can use express with
const app = express()

// Allows to bypass CORS policy -- allow fetching data from a different IP address than origin
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard2',
                 {useNewUrlParser: true});

// const mongoose = require('mongoose');
// const connection = "mongodb+srv://admin:admincs5610@cluster0.lza6i.mongodb.net/CS5610_A9retryWrites=true&w=majority";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./controllers/quizzes.controller.server')(app);
require('./controllers/questions.controller.server')(app);
require('./controllers/quiz-attempts.controller.server')(app);

// listen at port 3000
// if you point the browser to port localhost:3000 you can interact with server
// run server.js on command line to start server with command 'node server.js'
app.listen(3000);
