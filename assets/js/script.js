//VARIABLES
//Connects the elements from the index.html elements with the new variables created in the script.js
const startButton = document.getElementById("start-btn");
const quizContainerElement = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const submitButton = document.getElementById("submit-btn");
const submitQuizButton = document.getElementById("submitQuiz-btn");


//EVENTLISTENER
//Connects the EventListener with the functions
startButton.addEventListener("click", startGame);
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
    
    //loop thru the answers and creates a button for each answer
    question.answers.forEach(answer => {
        document.getElementById("answer-buttons").innerHTML += 
        `<label>
            <input class="btn answer-btn" type="submit" name="question-answer" value="${answer}">
        </label>`
        });

        // Shows submit button
        $(document).ready(function() {

            $(".answer-btn").on("click", function(){
                !$(this).toggleClass("answer-btn-active");
            });

            $(".answer-btn").on("click", function(){
                $("#submit-btn").removeClass("hide");
            });    
        })
};


//Submits the question and moves on to next question
function nextQuestion() {

}

// Submit quiz
function submitQuiz() {

};

//Show results, how many correct of total
function showResults() {

};

// Quiz will be start again
function restartQuiz() {

};
 

//ALL QUESTIONS AND ANSWERS GO HERE
const quizQuestions = [

    {question: "How was the Dellendistrict created?",
        answers: ["Meteor", "Volcano", "Big Bang", "Earthquake"],               
        correct: 0
    },

    {question: "What is the stone called that only can be found in the Dellendistrict?",
        answers: ["Dellennit", "Dellenkilt", "Dellenstone", "Dellenquartz"],               
        correct: 0
    },

    {question: "When were the Dellenlakes formed?",
        answers: ["Stone Age", "Bronce Age", "Ice Age", "Iron Age"],               
        correct: 2
    },

    {question: "Which is the biggest place in the Dellendistrict?",
        answers: ["Bjuråker", "Norbo", "Delsbo", "Moviken"],               
        correct: 2
    },

    {question: "Which place is not lying at the Dellenlakes?",
    answers: ["Delsbo", "Moviken", "Friggesund", "Eckelsbo"],               
        correct: 3
    }
];


