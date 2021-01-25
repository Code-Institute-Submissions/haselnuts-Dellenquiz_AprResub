//ALL QUESTIONS AND ANSWERS GO HERE
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

//VARIABLES
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");
const submitButton = document.getElementById("submit-btn");

//EVENTLISTENER
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
submitButton.addEventListener("click", submitQuiz);

//FUNCTIONS
function startGame() {
    console.log("started");
};

function selectAnswer() {

};

function nextQuestion() {

};

function previousQuestion() {

};

function submitQuiz() {

};