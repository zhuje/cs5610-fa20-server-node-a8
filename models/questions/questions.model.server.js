
// import mongoDB CLI
const mongoose = require("mongoose");
// import the schema
const questionSchema = require("./questions.schema.server");
// define the model (data access object) we'll use to communicate
// between this server and the database via mongoose CLI,
// "QuestionModel" -- is the unique identifier
const questionsModels = mongoose.model(
    'QuestionModel',
    questionSchema
);
module.exports = questionsModels;

// const findAllQuestions = () =>
//     questionsModelsServer.find()
//
// const findQuestionsForQuiz = (quizId) =>
//     questionsModelsServer.find({quizId: quizId})
//
//
//
// module.exports = {
//     findAllQuestions, findQuestionsForQuiz
// }
