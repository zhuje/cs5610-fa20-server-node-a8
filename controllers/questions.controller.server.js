// // import questionServices
// const questionsService = require("../services/question.service.server");
// // import model (data access object to mongoDB via mongoose CLI)
// // const questionModel = require("../models/questions/questionModel");
//
//
// module.exports = (app) => {
//
//   const findQuestionsForQuiz = (req, res) => {
//     const quizId = req.params["qid"];
//     questionsService.findQuestionsForQuiz(quizId)
//         .then(questions => res.send(questions))
//   };
//
//   const findAllQuestions = (req, res) =>
//       questionsService.findAllQuestions()
//           .then(questions => res.send(questions));
//
//
//   app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
//   app.get("/questions", findAllQuestions)
//
// }

const questionsService = require('../services/questions.service.server');
module.exports = function(app) {

  app.get('/api/questions', (req, res) =>
      questionsService.findAllQuestions()
          .then(allQuestions => res.json(allQuestions)));

  app.get('/api/questions/:qid', (req, res) =>
      questionsService.findQuestionById(req.params['qid'])
      .then(question => res.json(question)));

  app.get('/api/quizzes/:qid/questions', (req, res) =>
      questionsService.findQuestionsForQuiz(req.params['qid'])
          .then(questions => res.json(questions)));

};
