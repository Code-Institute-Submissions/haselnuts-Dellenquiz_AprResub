# Problemsolving
  Here will all problems, issues and errors listed that come up during the process.

## Console log error
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
