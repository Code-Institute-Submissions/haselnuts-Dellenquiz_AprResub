//VARIABLES
//Connects the elements from the index.html elements with the new variables created in the script.js
const startButton = document.getElementById("start-btn");
const quizContainerElement = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
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

    //Retrieves a question from the quiz questions array
    currentQuestion = quizQuestions;

    //Quiz starts with the first question in the quizQuestion array
    currentQuestionIndex = 0;
    currentAnswerIndex = 0;

    //Reference to the funtion setNextQuestion that shows the question
    setNextQuestion();
};

//
function setNextQuestion() {
    showQuestions(currentQuestion[currentQuestionIndex])
  };

// Shows the question in the html
function showQuestions(question) {
    questionElement.innerHTML = question.question;
    //loop thru the answers
    question.answers.forEach(answer => {
        //creating a button
        const button = document.createElement("button")
        //adding answers into the button
        button.innerText = answer.answers
        button.classList.add("btn")

        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {
    
};

function previousQuestion() {

};

function nextQuestion() {

}

function submitQuiz() {

};

//ALL QUESTIONS AND ANSWERS GO HERE
const quizQuestions = [
    {   question: "How was the Dellendistrict created?",
        answers: ["Meteor", "Volcano", "Big Bang", "Earthquake"], 
        correct: 0                   
    },
    {   question: "What is the stone called that only can be found in the Dellendistrict?",
        answers: [ "Dellenit", "Dellenkilt", "Dellenstone", "Dellenquartz"],
        correct: 0
    },
    {   question: "When were the Dellenlakes formed?",
        answers: ["Stone Age", "Bronce Age", "Ice Age", "Iron Age"],
        correct: 2
    },
    {   question: "Which is the biggest place in the Dellendistrict?",
        answers: ["Bjuråker", "Norrbo", "Delsbo", "Moviken"],
        correct: 2
    },
    {   question: "Which place is not lying at the Dellenlakes?",
        answers: ["Delsbo", "Moviken", "Friggesund", "Eckelsbo"],
        correct: 3
    }
];