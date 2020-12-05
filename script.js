  // This sets up the information used to drive the questions, choices, and answer.
  var questions = [
    { q: "What are variables used for in JavaScript Programs?", c: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"], a: 1 },
    { q: "Which of the following is not considered a JavaScript operator?", c: ["new","this","delete","typeof"], a: 2 },
    { q: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.", c: ["a wrapper"," a link","a cursor","a form"], a: 1 },
    { q: "How do you create a Date object in JavaScript?", c: [" dateObjectName.new Date([parameters])","dateObjectName := new Date([parameters])","dateObjectName Date([parameters])","dateObjectName = new Date([parameters])"], a: 4 },
  ]

  //These are global variables.
  var i = 0;
  var score = 0;
  var timeInterval;
  var secondsLeft = 75;

  //Taking in information
  var initial = document.querySelector("#initials");
  var scoreBoard = document.querySelector("#scoreboard");

  // Start quiz from a welcome position and activate quiz.
  document.getElementById("startBtn").addEventListener("click", startQuiz)
  document.getElementById("startBtn").addEventListener("click", setTime)

  //Reset to welcome position.
  document.getElementById("backBtn").addEventListener("click", function() {location.reload();})
  document.getElementById('clearBtn').addEventListener("click", function() {
    localStorage.setItem("user", null);
    scoreBoard.innerHTML = "";
  })

  //This function ends the quiz depending on what calls it.
  function endQuiz(){
    clearInterval(timerInterval);
    document.getElementById("start").hidden = true;
    document.getElementById("quiz").hidden = true;
    document.getElementById("feedbackPanel").hidden = true;
    document.getElementById("finish").hidden = false;
    document.getElementById("score").innerHTML = "Your final score was: " + score;
  }

    //This function starts the timer after startBtn is pressed.
    function setTime() {
        timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("timer").innerHTML = "Seconds Left: " + secondsLeft;
        if(secondsLeft <= 0) {
          endQuiz();
        }
      }, 1000);
    }

  //This function starts the quiz after startBtn is pressed.
  function startQuiz(){
    var a; 

    //This function displays the questions.
    function goToIquestion(i){

      a = questions[i].a; //This defines what a is for this part of the function.

      document.getElementById("questionText").innerHTML = questions[i].q;
      document.getElementById("c1Btn").innerHTML = questions[i].c[0];
      document.getElementById("c2Btn").innerHTML = questions[i].c[1];
      document.getElementById("c3Btn").innerHTML = questions[i].c[2];
      document.getElementById("c4Btn").innerHTML = questions[i].c[3];
    }

    //Hid and unhide appropriate divs.
    document.getElementById("start").hidden = true;
    document.getElementById("quiz").hidden = false;

    //This function checks to see if the choice selected is correct.
    function submitAnswer(c){
      if (c==a){ //If it is CORRECT adds to the global variable score, increases i, and presents in the footer.
        score = 15 + score;
        document.getElementById("result").innerHTML = "Correct!";
        i++;
        console.log("correct score now: " + score);
        console.log("submitAnswer i now: " + i);
      } else { //If it is WRONG subracts from the global variable score, increases i, and presents in the footer.
        score = -15 + score;
        secondsLeft = -25 + secondsLeft;
        document.getElementById("result").innerHTML = "Wrong!";
        i++;
        console.log("wrong score now: " + score);
        console.log("submitAnswer i now: " + i);
      }
      document.getElementById("feedbackPanel").hidden = false;
      console.log("this is c:" + c);
      if (i < questions.length){ //After verifiying choice this calls go to i question function and starts over.
        goToIquestion(i);
      }
      else {
        endQuiz();
      }
    }

    goToIquestion(0); //This the initial condition needed to present the first position of the index.

    document.getElementById("c1Btn").addEventListener("click", function(){ submitAnswer(1)});
    document.getElementById("c2Btn").addEventListener("click", function(){ submitAnswer(2)});
    document.getElementById("c3Btn").addEventListener("click", function(){ submitAnswer(3)});
    document.getElementById("c4Btn").addEventListener("click", function(){ submitAnswer(4)});
  }

//Score record and highscore submission process.
  document.getElementById("submitBtn").addEventListener("click",function(event) {
    event.preventDefault();
  
    // create user object from submission
    var user = {
      initials: initial.value.trim(),
      score: score,
    };

    console.log(user);

    //validate the fields
    if (user.initials === "") {
      alert("error", "Cannot be blank!");
    } else { 

      //set new submission
      localStorage.setItem("user", JSON.stringify(user));

      //hid submission card
      document.getElementById("finish").hidden = true;
      document.getElementById("high").hidden = false;

      //Pull from local storage and present.
      var lastUser = JSON.parse(localStorage.getItem("user"));
      scoreBoard.innerHTML = "something:" + lastUser.initials + "something:" + lastUser.score;
    }
  });
