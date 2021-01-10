// Variables
const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

//All questions and answers go here
const quizQuestions = [
    {   quest: "How was the Dellendistrict created?",
        answ: ["Meteor", "Volcano", "Big Bang", "Earthquake"], 
        correct: 0                   
    },
    {   quest: "What is the stone called that only can be found in the Dellendistrict?",
        answ: [ "Dellenit", "Dellenkilt", "Dellenstone", "Dellenquartz"],
        correct: 0
    },
    {   quest: "When were the Dellenlakes formed?",
        answ: ["Stone Age", "Bronce Age", "Ice Age", "Iron Age"],
        correct: 2
    },
    {   quest: "Which is the biggest place in the Dellendistrict?",
        answ: ["Bjuråker", "Norrbo", "Delsbo", "Moviken"],
        correct: 2
    },
    {   quest: "Which place is not lying at the Dellenlakes?",
        answ: ["Delsbo", "Moviken", "Friggesund", "Eckelsbo"],
        correct: 3
    }
];

//Build the Quiz
function buildQuiz() {
    //to store the HTML output
    const output = [];

    //for each question
    quizQuestions.forEach(function (currentQuestion, answerQuestion) {
        //to store answers
        const answers = [];

        //for each answer
        for(answer in currentQuestion.answers) {
            answers.push(
                //this is a template literal
                `<label>
                <input type="button" name="quest${answerQuestion}" value="answers">
                ${currentQuestion.answers[answ]}
                </label>`
            );
        };

        output.push (
            `<div class="question"> ${currentQuestion.quest}</div>
            <div class="answers"> ${answers.join("")}</div>`
    )
    });
    quizContainer.innerHTML = output.join("");    
};


function showResults() {};
 
submitBtn.addEventListener ("click", showResults);