
// Services will statically hold data
// and return a response back to the
// controller which will deliver it
// to the client

// Services should later be implemented
// to communicate with a database
// MongoDB to manipulate and fetch data so
// all our data can persist on the database
// rather than be statically held here.

// import array of quizzes
let quizzes = require("./quizzes");

const findAllQuizzes = () => {
    return quizzes;
};

// @param qid -- quiz ID
const findQuizById = (qid) => {
    const quiz = quizzes.find(quiz => quiz._id === qid);
    return (quiz)
};

const createQuiz = () => {
    const quiz = {_id: (new Date()).getTime()+"", title: "New Quiz"};
    quizzes.push(quiz);
    return(quiz)
}

// @param qid -- quiz ID
// return 200 -- returns true/ok
const deleteQuiz = (qid) => {
    quizzes = quizzes.filter(quiz => quiz._id !== qid);
    return 200;
}

// @param qid -- quiz ID
// return 200 -- returns true/ok
const updateQuiz = (qid) => {
    const newQuiz = req.body;
    quizzes = quizzes.map(quiz => quiz._id === qid ? newQuiz : quiz);
    return 200;
}

// From this module export the following functions :
module.exports = {
    findAllQuizzes, findQuizById, createQuiz, deleteQuiz, updateQuiz
}
