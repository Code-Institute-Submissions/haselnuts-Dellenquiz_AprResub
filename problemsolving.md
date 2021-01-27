# Problemsolving
*Here will all problems, issues and errors listed that come up during the process.*

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

## Scrip problems
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


