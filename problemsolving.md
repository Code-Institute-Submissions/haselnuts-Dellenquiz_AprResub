How to add a button to the quiz with JS within the loop
 - function quiz() {
                const quizbody = document.getElementById("quiz");

                let quizBody = "";

                questions.forEach( function(question) {
                    let answerBody = "";
                    question.answ.forEach(function(answer) {
                        let button = document.createElement("button");
                        button.innerhtml = ;
                        answerBody += ${answer};                  
                })

                    quizBody += `
                    <div>${question.quest}</div>
                    <div>${answerBody}</div>
                    `                    
                }            
                )
                quizbody.innerHTML = quizBody
            }

            quiz()

1. Added button, how do I get the answers into the buttons or how do I get the buttons into the <div>?
    - let button = document.createElement("button");
                        button.innerhtml = ;

    - Also these problems have to be solved: 
        - index.html 2
        Expression expected.javascript[78, 44]
        ';' expected.javascript[79, 40]