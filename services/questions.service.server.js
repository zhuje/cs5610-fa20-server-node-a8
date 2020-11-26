// // imports the JSON file that holds our list of quizzes
// const questions = require("./questions")
// // import questionModel
// const questionModel = require("../models/questions/questions.models.server")
//
// const findQuestionsForQuiz = (quizId) =>
//     questionModel.findQuestionsForQuiz(quizId)
//
//
// const findAllQuestions = () => {
//     return questionModel.findAllQuestions()
// }
//
// module.exports = {
//     findQuestionsForQuiz, findAllQuestions
// }
//

const questionsDao = require('../daos/questions.dao.server');

const findAllQuestions = () =>
    questionsDao.findAllQuestions();
const findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid);
const findQuestionsForQuiz = (qid) =>
    questionsDao.findQuestionsForQuiz(qid);

module.exports = {
    findAllQuestions, findQuestionById, findQuestionsForQuiz
};

