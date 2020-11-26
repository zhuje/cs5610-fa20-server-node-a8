const quizzesModel = require('../models/quizzes/quizzes.model.server');

const findAllQuizzes = () => quizzesModel.find();
const findQuizById = (qid) => quizzesModel.findById(qid);

module.exports = {
    findAllQuizzes, findQuizById
};
