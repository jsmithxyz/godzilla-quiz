var startQuiz = document.querySelector("#start-quiz");
var jumbo = document.querySelector(".jumbotron");
var timeEl = document.querySelector("#countdown");
var questionsBox = document.querySelector(".questions-box");
var question = document.querySelector("#question");
var initialsBox = document.querySelector(".form-group");
var highScoreTitle = document.querySelector("#highScoreTitle");


var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

var btnGroup = document.querySelector(".buttonGroup");
var userChoice = document.querySelector(".btn btn-outline-dark")

var secondsLeft = 75;
currentQ = 0;

function setTime() {
    timeEl.style.visibility= "visible";
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;

      if(currentQ == questions.length) {
        var userScore = secondsLeft;
        clearInterval(timerInterval);
        highScoreTitle.textContent = ("You Saved the City from Destruction with " + userScore + " second(s) left!");
      }
  }, 1000);}

function start() {
    jumbo.style.display = "none";
    questionsBox.style.display = "block";
    setTime();
    renderQuestions();
}

function renderQuestions() {

  if(currentQ == questions.length) {
    questionsBox.style.display = "none";
    initialsBox.style.visibility = "visible";
  }

  question.textContent= questions[currentQ].title;
  choice1.textContent= questions[currentQ].choices[0];
  choice2.textContent= questions[currentQ].choices[1];
  choice3.textContent= questions[currentQ].choices[2];
  choice4.textContent= questions[currentQ].choices[3];


}


btnGroup.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    if(event.target.textContent === questions[currentQ].answer) {
      currentQ ++;
      console.log("correct");
    }
    else {
      currentQ ++;
      secondsLeft = secondsLeft -15;
      console.log("wrong");
    }
    renderQuestions();
}});

startQuiz.addEventListener("click", start);




    