  // This sets up the information used to drive the questions, choices, and answer.
  var questions = [
    { q: "What are variables used for in JavaScript Programs?", c: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"], a: 1 },
    { q: "Which of the following is not considered a JavaScript operator?", c: ["new","this","delete","typeof"], a: 2 },
    { q: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.", c: ["a wrapper"," a link","a cursor","a form"], a: 1 },
    { q: "How do you create a Date object in JavaScript?", c: [" dateObjectName.new Date([parameters])","dateObjectName := new Date([parameters])","dateObjectName Date([parameters])","dateObjectName = new Date([parameters])"], a: 4 },
  ];

  //These are global variables.
  var i = 0;
  var score = 0;

  // Start quiz from a welcome position and activate quiz.
  document.getElementById("startBtn").addEventListener("click", startQuiz)

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
        score = 10 + score;
        document.getElementById("result").innerHTML = "Correct!";
        i++;
        console.log("correct score now: " + score);
        console.log("submitAnswer i now: " + i);
      } else { //If it is WRONG subracts from the global variable score, increases i, and presents in the footer.
        score = -10 + score;
        document.getElementById("result").innerHTML = "Wrong!";
        i++;
        console.log("wrong score now: " + score);
        console.log("submitAnswer i now: " + i);
      }
      document.getElementById("feedbackPanel").hidden = false;
      console.log("this is c:" + c);
      if (i <= questions.length){    //After verifiying choice this calls go to i question function and starts over.
        goToIquestion(i);
      }
      else {

      }
    }

    goToIquestion(0); //This the initial condition needed to present the first position of the index.

    document.getElementById("c1Btn").addEventListener("click", function(){ submitAnswer(1)});
    document.getElementById("c2Btn").addEventListener("click", function(){ submitAnswer(2)});
    document.getElementById("c3Btn").addEventListener("click", function(){ submitAnswer(3)});
    document.getElementById("c4Btn").addEventListener("click", function(){ submitAnswer(4)});
  };

  //This function ends the quiz depending on what calls it.
  function endQuiz(){

  };
