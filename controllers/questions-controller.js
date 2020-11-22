// import questionServices
const questionsService = require("../services/questions-service");
// import model (data access object to mongoDB via mongoose CLI)
// const questionModel = require("../models/questions/questionModel");


module.exports = (app) => {

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params["qid"];
    questionsService.findQuestionsForQuiz(quizId)
        .then(questions => res.send(questions))
  };

  const findAllQuestions = (req, res) =>
      questionsService.findAllQuestions()
          .then(questions => res.send(questions));


  app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
  app.get("/questions", findAllQuestions)

}
