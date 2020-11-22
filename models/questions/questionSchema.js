
// import mongoose a MongoDB CLI
const mongoose = require("mongoose");

// Define the schema
const questionSchema = mongoose.Schema(
    // attributes of the document object
    {
        question: String,
        quizId: String,
        options: [String],
        points: Number,
    },
    // which collection we should refer to to manipulate data
    {collection: "questions"})

module.exports = questionSchema;
