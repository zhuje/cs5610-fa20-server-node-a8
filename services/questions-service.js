// imports the JSON file that holds our list of quizzes
const questions = require("./questions")

const findQuestionsForQuiz = (quizId) => {
    const questionsForQuiz = questions.filter(question => question.quizId === quizId)
    return questionsForQuiz
}

module.exports = {
    findQuestionsForQuiz,
}

