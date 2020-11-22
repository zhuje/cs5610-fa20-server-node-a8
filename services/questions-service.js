// imports the JSON file that holds our list of quizzes
const questions = require("./questions")
// import questionModel
const questionModel = require("../models/questions/questionModel")

const findQuestionsForQuiz = (quizId) =>
    questionModel.findQuestionsForQuiz(quizId)


const findAllQuestions = () => {
    return questionModel.findAllQuestions()
}

module.exports = {
    findQuestionsForQuiz, findAllQuestions
}

