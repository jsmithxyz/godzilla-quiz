var startQuiz = document.querySelector("#start-quiz");
var jumbo = document.querySelector(".jumbotron");
var timeEl = document.querySelector("#countdown");
var questionsBox = document.querySelector(".questions-box");
var question = document.querySelector("#question");
var initialsBox = document.querySelector(".form-group");
var highScoreTitle = document.querySelector("#highScoreTitle");
var initialsInput = document.querySelector("#formGroupExampleInput");
var submitBtn = document.querySelector(".btn.btn-dark");
var scoreList = document.querySelector("#scoreList");
var highScoresLink = document.querySelector("#viewScores");
var scoreBox = document.querySelector(".scoresBox");


var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

var btnGroup = document.querySelector(".buttonGroup");
var userChoice = document.querySelector(".btn btn-outline-dark")

var secondsLeft = 75;
currentQ = 0;

highScoresLink.addEventListener("click", function(event){
  event.preventDefault();
  if (scoreBox.style.display === "none"){
  scoreBox.style.display = "block";
  scoreList.style.display = "block";
  }
  else {
    scoreBox.style.display = "none";
    scoreList.style.display = "none";
  }
})

function renderLastPlayer() {
  var initials = localStorage.getItem("initials");
  var userScore = localStorage.getItem("score");
  
  var li = document.createElement("li");
  li.innerHTML = JSON.parse(initials) + " - " + userScore;
  scoreList.append(li);
}

// Functionality for timer
function setTime() {
    timeEl.style.visibility= "visible";
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;

      if((currentQ === questions.length)) {
        clearInterval(timerInterval);
        var userScore = secondsLeft;
        highScoreTitle.textContent = ("You Saved the City from Destruction with " + userScore + " second(s) left!");
      }
  }, 1000);}

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var userScore = secondsLeft;
    var initials = initialsInput.value;
    
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("score", JSON.stringify(userScore));
    renderLastPlayer();
    initialsBox.style.display = "none";
    jumbo.style.display = "block";
    timeEl.style.visibility= "hidden";
    secondsLeft = 75;
    timeEl.textContent = "Timer: 75";

  })

// Starts Quiz by Changing displays & Calls setTime and renderQuestions
function start() {
    jumbo.style.display = "none";
    questionsBox.style.display = "block";
    currentQ = 0;
    setTime();
    renderQuestions();
}

// Displays questions & Checks if any more questions left & changes display properties
function renderQuestions() {
  if(currentQ === questions.length) {
    questionsBox.style.display = "none";
    initialsBox.style.display = "block";
  }
  question.textContent= questions[currentQ].title;
  choice1.textContent= questions[currentQ].choices[0];
  choice2.textContent= questions[currentQ].choices[1];
  choice3.textContent= questions[currentQ].choices[2];
  choice4.textContent= questions[currentQ].choices[3];
}

// Clicking a choice - Counter, Checks Answers, & Calls back Render Questions Function
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





    