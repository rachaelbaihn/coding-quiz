var timeleft = 30;
var questionIndex = 0;
var questions = [{
    question:"Commonly used data types do not include:",
    answers:["1. Strings","2. Booleans","3. Alerts","4. Numbers"],
    correctAnswer:"3. Alerts"
}, {
    question:"The condition in an if / else statement is enclosed within ______.",
    answers:["1. Quotes","2. Curly brackets","3. Parentheses","4. Square brackets"],
    correctAnswer:"3. Alerts"
}, {
    question:"Arrays in javascript can be used to store",
    answers:["a","b","c","d"],
    correctAnswer:"a"
}, {
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    answers:["1. Javascript","2. Terminal / bash","3. For loops","4. Console log"],
    correctAnswer:"4. Console log"
}]

//GIVEN I am taking a code quiz
//WHEN I click the start button
addEventListener('click', (event) => {});

onclick = (event) => {
};
    var startbtn = document.getElementById("gameStart")

//THEN a timer starts and I am presented with a question
startbtn.addEventListener("click", ()=>{

    event.preventDefault();
    displayQuestions();

    var downloadTimer = setInterval(()=>{
    document.getElementById("countdown").innerHTML = timeleft + " "+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});


//WHEN I answer a question
//THEN I am presented with another question
function displayQuestions() {
    console.log(questions)
    displaySingleQuestion()
}

function displaySingleQuestion() {
    console.log (questionIndex)
    console.log (questions[questionIndex])
    var questionHeader=document.getElementById("question")
    var questionAnswerBtn1=document.getElementById("ans-1")
    var questionAnswerBtn2=document.getElementById("ans-2")
    var questionAnswerBtn3=document.getElementById("ans-3")
    var questionAnswerBtn4=document.getElementById("ans-4")

    questionHeader.innerHTML = questions[questionIndex].question;
    questionAnswerBtn1.innerHTML = questions[questionIndex].answers[0];
    questionAnswerBtn2.innerHTML = questions[questionIndex].answers[1];
    questionAnswerBtn3.innerHTML = questions[questionIndex].answers[2];
    questionAnswerBtn4.innerHTML = questions[questionIndex].answers[3];

    questionAnswerBtn1.addEventListener('click',checkAnswer)
    questionAnswerBtn2.addEventListener('click',checkAnswer)
    questionAnswerBtn3.addEventListener('click',checkAnswer)
    questionAnswerBtn4.addEventListener('click',checkAnswer)
}
function checkAnswer(event){
    console.log(event.target.innerHTML)
    var inputAnswer=event.target.innerHTML
    var correctAnswer=questions[questionIndex].correctAnswer
    if (inputAnswer == correctAnswer) {
        console.log("correct")
    }
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
    else {timeleft -= 5;}
    questionIndex=questionIndex+1
    displaySingleQuestion ()
}




//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score


function endQuiz(){
    //hide questions
    //hide answers
    //display score page
}


//ask for with text box and store initials make a JSON object and save that in local storage
//find a way to display all scores in display score page


//make form

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);