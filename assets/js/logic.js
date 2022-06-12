var containerEl = document.querySelector("#container");
var startButtonEl = document.querySelector("#start-btn")
var headerEl = document.querySelector("#header")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var choice1El = choicesEl.querySelector("#choice1")
var choice2El = choicesEl.querySelector("#choice2")
var choice3El = choicesEl.querySelector("#choice3")
var choice4El = choicesEl.querySelector("#choice4")
var currentQuestion = 0;

//starts the quiz on button click.
startButtonEl.addEventListener("click" , function() {
startButtonEl.style.display = "none";
displayNextQuestion();
});

choicesEl.addEventListener("click", evaluateAnswer);

function evaluateAnswer(event) {

    var choiceSelected = event.target;

    for(i=0;i<questions[currentQuestion].choices.length; i++)
    {
        if(choiceSelected.textContent == questions[currentQuestion].choices[i].text)
        {
            if (questions[currentQuestion].choices[i].isCorrect == false)
            {
                //deduct 15seconds
                console.log("Time - 15 seconds");
            }
        }
    }
    console.log(" " + questions[currentQuestion].choices[i].text)
    console.log(choiceSelected.textContent)
    currentQuestion++;
    if(currentQuestion === questions.length)
    {
        alert("Game Over!")
    }
    else {
        displayNextQuestion();
    }
}

function displayNextQuestion() {
    console.log(currentQuestion)

    headerEl.textContent = "Question " + questions[currentQuestion].id;

    questionsEl.textContent = questions[currentQuestion].question;

    choice1El.textContent = "(1.) " + questions[currentQuestion].choices[0].text;
    choice2El.textContent = "(2.) " + questions[currentQuestion].choices[1].text;
    choice3El.textContent = "(3.) " + questions[currentQuestion].choices[2].text;
    choice4El.textContent = "(4.) " + questions[currentQuestion].choices[3].text;
}
