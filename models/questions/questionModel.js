
// import mongoDB CLI
const mongoose = require("mongoose");
// import the schema
const questionSchema = require("./questionSchema")
// define the model (data access object) we'll use to communicate
// between this server and the database via mongoose CLI
const questionModel = mongoose.model("QuestionModel", questionSchema)


const findQuestionsForQuiz = (quizId) =>
    questionModel.find({quizId: quizId})

const findAllQuestions = () =>
    questionModel.find()

module.exports = {
    findAllQuestions, findQuestionsForQuiz
}
