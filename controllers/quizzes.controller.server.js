// // To Run -- on terminal enter:  node server.js OR npm start
// // Point browser to :  localhost:3000/quizzes
//
// // Controller will interact with client
// // by listening to http requests and
// // going into the server.services then delivering
// // some response back to the client
//
// // imports the quizzes-Service which communicates with the database
// // to fetch data/ manipulate the database
// const quizzesService = require("../services/quizzes.service.server")
//
//
// module.exports = (app) => {
//
//   // req -- request
//   // res -- response
//   // creates a communication between client and this server
//   const findAllQuizzes = (req, res) => {
//     quizzesService.findAllQuizzes()
//         .then(quizzes => res.send(quizzes))
//   }
//
//   const findQuizById = (req, res) => {
//     // const quizId = req.params["qid"]
//     // res.send(quizzesService.findQuizById(req.params.qid))
//     quizzesService.findQuizById(req.params.qid)
//         .then(quiz => res.send(quiz))
//   }
//
//   const findQuizByIdDetails = (req, res) => {
//     quizzesService.findQuizByIdDetails(req.params.qid)
//         .then(quiz => res.send(quiz))
//   }
//
//
//
//   const createQuiz = (req, res) => {
//     quizzesService.createQuiz()
//         .then(actualQuiz => res.send(actualQuiz))
//   }
//
//   const deleteQuiz = (req, res) => {
//     const qid = req.params.qid;
//     quizzesService.deleteQuiz(qid)
//         .then(status => res.send(status))
//
//   }
//
//   const updateQuiz = (req, res) => {
//     // the ':qid' paramater from the URL in http request
//     const qid = req.params.qid
//     // the whole body of the http quest which should contain an object for a new quiz
//     // can specify specific attribute of body with 'req.body.fooKey'
//     const newQuiz = req.body
//     quizzesService.updateQuiz(qid, newQuiz)
//         .then(status => res.send(status))
//   }
//
//   const findAllQuizzesDetails = (req, res) => {
//     quizzesService.findAllQuizzesDetails()
//         .then(quizzes => res.send(quizzes))
//   };
//
//
//   // allow express (object 'app') to handle all incoming
//   // client requests
//   // app -- express instance
//   // .get/ .post / .delete -- client request methods
//   // "/foo/bar" -- first arg is the URL request is coming from
//   // findQuizById, etc. -- second arg is the function in the server to call
//   app.get("/quizzes/:qid", findQuizById)
//   app.get("/quizzes", findAllQuizzes)
//   app.post("/quizzes", createQuiz)
//   app.delete("/quizzes/:qid", deleteQuiz)
//   app.put("/quizzes/:qid", updateQuiz)
//   app.get("/quizzes-details", findAllQuizzesDetails)
//   app.get("/quizzes/:qid/details" , findQuizByIdDetails)
// }
//

const quizzesService = require('../services/quizzes.services.server');
module.exports = function (app) {
  app.get('/api/quizzes', (req, res) =>
      quizzesService.findAllQuizzes()
      .then(allQuizzes => res.json(allQuizzes)));
  app.get('/api/quizzes/:qid', (req, res) =>
      quizzesService.findQuizById(req.params['qid'])
          .then(quiz => res.json(quiz)));
};
