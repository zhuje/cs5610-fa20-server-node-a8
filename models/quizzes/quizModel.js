
const mongoose = require("mongoose");


const quizSchema = require("./quizSchema")

const quizModel = mongoose.model("QuizModel", quizSchema)

const findAllQuizzes = () =>
    quizModel.find();


// '.findOne()' returns the first object that matches the qid
// purpose - instead of fetching an array with one object
// we instead will just get the object back without the
// encapsulating array
// '.findById()' is a mongoose/mongo function
const findQuizById = (qid) =>
    // quizModel.findOne({_id: qid})
    quizModel.findById(qid)


const createQuiz = (newQuiz) =>
    quizModel.create(newQuiz)


const removeQuiz = (qid) =>
    // mongoose default converts the string
    // 'qid' into a ObjectId in mongoDB
    quizModel.remove({_id: qid})

const updateQuiz = (qid, newQuiz) =>
    quizModel.update({_id: qid},
                     {$set: newQuiz})

module.exports = {
    findAllQuizzes, findQuizById, createQuiz,
    removeQuiz, updateQuiz
}
