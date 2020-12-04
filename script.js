  // The array of questions for our quiz.
  var questions = [
    { q: "Question 1", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 1 },
    { q: "Question 2", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 2 },
    { q: "Question 3", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 3 },
    { q: "Question 4", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 4 },
  ];
  
  
  // Start quiz from a welcome position and activates quiz with a START QUIZ btn.
  document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("start").hidden = true;
    document.getElementById("quiz").hidden = false;

    //Start quiz with a score of 0.
    var score = 0;

    //Starts timer when startBtn is clicked.

    // First question
    nextQuestion(3);

  }, false);

  function nextQuestion(i) {
    //Set and check answer.
    function clicked(c){
      if (c==a){
        document.getElementById("result").innerHTML = "Correct!";
      } else {
        document.getElementById("result").innerHTML = "Wrong!";
      }
      document.getElementById("feedbackPanel").hidden = false;
    };

      //Changes Question and Answer Text in quiz div using questions object.
      document.getElementById("questionText").innerHTML = questions[i].q;
      document.getElementById("c1Btn").innerHTML = questions[i].c[0];
      document.getElementById("c2Btn").innerHTML = questions[i].c[1];
      document.getElementById("c3Btn").innerHTML = questions[i].c[2];
      document.getElementById("c4Btn").innerHTML = questions[i].c[3];

      //Set current answer to question.
      var a = questions[i].a;

      //Listen for a button to be clicked to run feedback.
      document.getElementById("c1Btn").addEventListener("click", function(){ clicked(1)});
      document.getElementById("c2Btn").addEventListener("click", function(){ clicked(2)});
      document.getElementById("c3Btn").addEventListener("click", function(){ clicked(3)});
      document.getElementById("c4Btn").addEventListener("click", function(){ clicked(4)});
  }

      

