
const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
                                       title: String
                                   }, {collection: "quizzes"})

module.exports = quizSchema;
