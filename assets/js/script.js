// Variables

const submitBtn = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

//All questions and answers go here
const quizQuestions = [
    {   question: "How was the Dellendistrict created?",
        answ: ["Meteor", "Volcano", "Big Bang", "Earthquake"], 
        correct: 0                   
    },
    {   question: "What is the stone called that only can be found in the Dellendistrict?",
        answ: [ "Dellenit", "Dellenkilt", "Dellenstone", "Dellenquartz"],
        correct: 0
    },
    {   question: "When were the Dellenlakes formed?",
        answ: ["Stone Age", "Bronce Age", "Ice Age", "Iron Age"],
        correct: 2
    },
    {   question: "Which is the biggest place in the Dellendistrict?",
        answ: ["Bjuråker", "Norrbo", "Delsbo", "Moviken"],
        correct: 2
    },
    {   question: "Which place is not lying at the Dellenlakes?",
        answ: ["Delsbo", "Moviken", "Friggesund", "Eckelsbo"],
        correct: 3
    }
];

//Build the Quiz
function buildQuiz() {
    const quizContainer = document.getElementById("quiz");

    //for each question
    let quizStr = "";

    quizQuestions.forEach( function (currentQuestion) {

        let answerStr ="";
        currentQuestion.answ.forEach( function(answer){
            answerStr +=
            `<label>
                <input type="button" name="" value="${answer}" class="answer">
            </label>`
        });

        quizStr +=
        `<div>
            <h3 class="question">${currentQuestion.question}</h3>
            ${answerStr}            
        </div>`
    });

    quizContainer.innerHTML = quizStr;

};


    buildQuiz();

