# Problemsolving
*All problems, issues and errors will be listed here which come up during the developement of this website.*

## Console log error
*All errors from the console will be listed here

### script.js:35 Uncaught TypeError: Cannot read property 'addEventListener' of null     at script.js:35
    - previousButton.addEventListener("click", previousQuestion)
      - no problem found with above Event addEventListener
      - issue found in index file: type O found in ID prenious-btn, corrected to previous-btn

### script.js:46 Uncaught TypeError: Cannot read property 'classList' of null at HTMLButtonElement.startGame (script.js:46)
    - line 45:startButton.classList.add("hide"),
    - line 46: quizContainerElement.classList.remove("hide");
      - found comma instead of semicolon on line 45: changed to semicolon, issue remains
      - found that quiz-container was not an ID attribute in index.html, changed quiz-container form class to ID

### 

## Script problems
*All problems within sript.js file will be listed here*

### Answer buttons do not show answer text
  - think the issue is that the answers should be a string
    - tried to change the array into a string with .toString but issue remains
    - changed the array manual into a string from "answers: ["Meteor", "Volcano", "Big Bang", "Earthquake"], correct: 0 
      to  answers: [
                {text: "Dellennit", correct: true},
                {text: "Dellenkilt", correct: false},
                {text: "Dellenstone", correct: false},
                {text: "Dellenquartz", correct: false} ]
    - changed back to previous aray, as I changed the forEach loop for the answers


## jQuery
*All jQuery issues will be listed here*

## When answer button is clicked the submit button should be appear but it does not

  - The following code is only to test if it works. The code is working in the console but not from the jquery.js file 
    $(document).ready(function() {
       $("#answer-btn").click(function() {
        $(this).css("background-color", "blue");
       });    
    })

  - changed the code to and moved it to script.js into function showQuestions()
    $(document).ready(function() {

        $(".answer-btn").on("click", function(){
            $("#submit-btn").removeClass("hide");
        });    
    })
  - Submit button appears when answer button is clicked

## All answer buttons change background color when clicked, only one at a time shall change background color
  - Code: 
        $(".answer-btn").on("click", function(){
            !$(this).toggleClass("answer-btn-active");
        });
  - Issue still remains!!

# CSS 
*All CSS issues will be listed here*

## Submit button places side by side with the answers
  - code before
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 800px;
        max-width: 80%;
        }
  - Code after: added flex-direction: column to change direction
    Credit to: https://stackoverflow.com/questions/49393175/move-buttons-below-text/49393260
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 800px;
        max-width: 80%;
    }



