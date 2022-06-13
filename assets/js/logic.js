var containerEl = document.querySelector("#container");
var startButtonEl = document.querySelector("#start-btn")
var headerEl = document.querySelector("#headerTitle")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var choice1El = choicesEl.querySelector("#choice1")
var choice2El = choicesEl.querySelector("#choice2")
var choice3El = choicesEl.querySelector("#choice3")
var choice4El = choicesEl.querySelector("#choice4")
var timerEl = document.querySelector("#timer");
var inputEl = document.querySelector("#highscore");
var submitEl = document.querySelector("#hsSubmit");
var linkEl = document.querySelector("#viewHS")
var placementEl = document.querySelector("#placementsH2")
var currentQuestion = 0;
var timeLeft = 75;
timerEl.style.display = "contents";
timerEl.textContent = timeLeft + " seconds remaining!";
var timeCounter;

var checkScore = highScore();


//starts the quiz on button click.
startButtonEl.addEventListener("click" , function(timeCounter) {
startButtonEl.style.display = "none";
displayNextQuestion();
choicesEl.style.display = "contents";
linkEl.style.display = "none";

startButtonEl.removeEventListener;
timerEl.style.display = "contents";
timeCounter = setInterval(timerFunction, 1000);
timerEl.textContent = timeLeft + " seconds remaining!";
});


choice1El.addEventListener("click", evaluateAnswer);
choice2El.addEventListener("click", evaluateAnswer);
choice3El.addEventListener("click", evaluateAnswer);
choice4El.addEventListener("click", evaluateAnswer);

function evaluateAnswer(event) {

    var choiceSelected = event.target;

    for(i=0;i<questions[currentQuestion].choices.length; i++)
    {
        if(choiceSelected.textContent == questions[currentQuestion].choices[i].text)
        {
            if (questions[currentQuestion].choices[i].isCorrect == false)
            {
                timeLeft -= 15;
                if(timeLeft <= 0) {timeLeft = 0;}
                console.log("WRONG ANSWER");
            }
            console.log(timeLeft + " seconds left.");
        }
    }
    currentQuestion++;

    if(currentQuestion == questions.length)
    {
      clearInterval(timeCounter);
      timerEl.textContent = timeLeft + " seconds remaining!";
      gameOver();
    }
    else {
        displayNextQuestion();
    }
}

function displayNextQuestion() {

    headerEl.textContent = "Question " + questions[currentQuestion].id;

    questionsEl.textContent = questions[currentQuestion].question;

    choice1El.textContent = questions[currentQuestion].choices[0].text;
    choice2El.textContent = questions[currentQuestion].choices[1].text;
    choice3El.textContent = questions[currentQuestion].choices[2].text;
    choice4El.textContent = questions[currentQuestion].choices[3].text;
}

function timerFunction(timeCounter) {
    if(timeLeft <= 0) {
        timeLeft = 0;
        clearInterval(timeCounter);
        timerEl.textContent = timeLeft + " seconds remaining!";
        gameOver();
    }
    else {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining!";
    }
    return timeLeft;
}

function gameOver(event) {
    choicesEl.style.display = "none";
    headerEl.style.alignItems = "center";
    inputEl.style.display = "block";
    questionsEl.textContent = timeLeft;
    timerEl.style.display = "none";
    submitEl.style.display = "block";

    submitEl.addEventListener("click", highScore);

    if(timeLeft >= 50) {
        headerEl.textContent = "Very Well Done!";
        headerEl.style.paddingLeft = "55px"
    }
    else if (timeLeft >= 20) {
        headerEl.textContent = "Well Done!";
        headerEl.style.paddingLeft = "90px"
    }
    else {
        headerEl.textContent = "Oof!";
        headerEl.style.paddingLeft = "135px";
    }
var checkScore = JSON.parse(localStorage.getItem("Score"));

if (parseInt(questionsEl.textContent) > checkScore.score) {
    questionsEl.textContent = timeLeft + " : This is a new HighScore!"
}
}

function highScore(event) {
    var score = {
        name: inputEl.value,
        score: parseInt(questionsEl.textContent)
    }
    
    if(localStorage.getItem("Score") === null) {
        var saveScore = localStorage.setItem("Score", JSON.stringify(score));
    }

    var checkScore = JSON.parse(localStorage.getItem("Score"));


    if (checkScore.score < parseInt(questionsEl.textContent)){
        var saveScore = localStorage.setItem("Score", JSON.stringify(score));

    }
    return checkScore;
}