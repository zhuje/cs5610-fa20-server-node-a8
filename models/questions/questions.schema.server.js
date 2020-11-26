//
// // import mongoose a MongoDB CLI
// const mongoose = require("mongoose");
//
// // Define the schema
// const questionsSchemaServer = mongoose.Schema(
//     // attributes of the document object
//     {
//         question: String,
//         quizId: String,
//         options: [String],
//         points: Number,
//     },
//     // which collection we should refer to to manipulate data
//     {collection: "questions"})
//
// module.exports = questionsSchemaServer;


// import mongoose a MongoDB CLI
const mongoose = require("mongoose");

// Define the schema
const questionsSchemaServer = mongoose.Schema(
    // attributes of the document object
    {
        _id: String,
        title: String,
        question: String,
        correct: String,
        answer: String,
        type: {type: String, enum:['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
        choices:[String],
    },
    // which collection we should refer to to manipulate data
    {collection: "questions"});

module.exports = questionsSchemaServer;
