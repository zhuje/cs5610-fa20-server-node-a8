
// import mongoDB CLI
const mongoose = require("mongoose");
// import the schema
const questionSchema = require("./questions.schema.server");
// define the model (data access object) we'll use to communicate
// between this server and the database via mongoose CLI,
// "QuestionModel" -- is the unique identifier
const questionModel = mongoose.model("QuestionModel", questionSchema);


const findAllQuestions = () =>
    questionModel.find()

const findQuestionsForQuiz = (quizId) =>
    questionModel.find({quizId: quizId})



module.exports = {
    findAllQuestions, findQuestionsForQuiz
}
