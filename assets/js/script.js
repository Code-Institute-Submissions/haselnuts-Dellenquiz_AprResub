//VARIABLES
//Connects the elements from the index.html elements with the new variables created in the script.js
const startButton = document.getElementById("start-btn");
const quizContainerElement = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerElement = docuemnt.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");
const submitButton = document.getElementById("submit-btn")

//EVENTLISTENER
//Connects the EventListener with the functions
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion)
submitButton.addEventListener("click", submitQuiz);


//FUNCTIONS
function startGame() {
    //When start button pressed the start button will hide
    startButton.classList.add("hide");
    //After the start button is pressed, it will hide and the quiz container will show up
    quizContainerElement.classList.remove("hide");
    //Quiz starts with the first question in the quizQuestion array
    currentQuestion = 0;
    setNextQuestion
};

function showQuestions(question) {
    questionElement.innerHTML = question.question;
}

showQuestions(currentQuestion)

function selectAnswer() {
    
};

function nextQuestion() {

};

function previousQuestion() {

};

function submitQuiz() {

};

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