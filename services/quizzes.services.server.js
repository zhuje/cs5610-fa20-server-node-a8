//
// // import array of quizzes
// let quizzes = require("./quizzes");
// // import quizModel
// const quizModel = require("../models/quizzes/quizzes.models.server");
//
//
// const findAllQuizzes = () =>
//     quizModel.findAllQuizzes();
//
// const findQuizById = (qid) =>
//     quizModel.findQuizById(qid);
//
// const createQuiz = () => {
//     const quiz = {title: "New Quiz"};
//     return quizModel.createQuiz(quiz);
// };
//
// const deleteQuiz = (qid) => {
//     return quizModel.removeQuiz(qid)
// };
//
// const updateQuiz = (qid, newQuiz) =>
//     quizModel.updateQuiz(qid,newQuiz);
//
// const findAllQuizzesDetails = () =>
//     quizModel.findAllQuizzesDetails();
//
// const findQuizByIdDetails = (qid) =>
//     quizModel.findQuizByIdDetails(qid)
//
// // Exports the following functions
// module.exports = {
//     findAllQuizzes, findQuizById, createQuiz,
//     deleteQuiz, updateQuiz, findAllQuizzesDetails,
//     findQuizByIdDetails
// }

const quizzesDao = require('../daos/quizzes.dao.server');

const findAllQuizzes = () => quizzesDao.findAllQuizzes();
const findQuizById = (qid) => quizzesDao.findQuizById(qid);

module.exports = {
    findAllQuizzes, findQuizById
};
