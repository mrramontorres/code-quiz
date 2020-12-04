    // Start quiz from a welcome position and activates quiz with a START QUIZ btn.
    document.getElementById("startBtn").addEventListener("click", function() {
      document.getElementById("start").hidden = true;
      document.getElementById("quiz").hidden = false;
    }, false);

    //Starts timer when startBtn is clicked.

    //Start quiz with a score of 0.
    var score = 0;

  // The array of questions for our quiz.
  var questions = [
    { q: "Question 1", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 1 },
    { q: "Question 2", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 2 },
    { q: "Question 3", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 3 },
    { q: "Question 4", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 4 },
  ];

  //Changes Question and Answer Text in quiz div using questions object.
  document.getElementById("questionText").innerHTML = questions[0].q;
  document.getElementById("c1Btn").innerHTML = questions[0].c[0];
  document.getElementById("c2Btn").innerHTML = questions[0].c[1];
  document.getElementById("c3Btn").innerHTML = questions[0].c[2];
  document.getElementById("c4Btn").innerHTML = questions[0].c[3];

    //Set current answer to question.
    var a = questions[0].a;

    //Listen for a button to be clicked to run feedback.
    document.getElementById("c1Btn").addEventListener("click", clicked1);
    document.getElementById("c2Btn").addEventListener("click", clicked2);
    document.getElementById("c3Btn").addEventListener("click", clicked3);
    document.getElementById("c4Btn").addEventListener("click", clicked4);

    //Set and check answer.
    function clicked1(){
      var c = 1;
      if (c==a){
        document.getElementById("result").innerHTML = "Correct!";
      } else {
        document.getElementById("result").innerHTML = "Wrong!";
      }
      document.getElementById("feedbackPanel").hidden = false;
    };

    function clicked2(){
      var c = 2;
      if (c==a){
        document.getElementById("result").innerHTML = "Correct!";
      } else {
        document.getElementById("result").innerHTML = "Wrong!";
      }
      document.getElementById("feedbackPanel").hidden = false;
    };

    function clicked3(){
      var c = 3;
      if (c==a){
        document.getElementById("result").innerHTML = "Correct!";
      } else {
        document.getElementById("result").innerHTML = "Wrong!";
      }
      document.getElementById("feedbackPanel").hidden = false;
    };

    function clicked4(){
      var c = 4;
      if (c==a){
        document.getElementById("result").innerHTML = "Correct!";
      } else {
        document.getElementById("result").innerHTML = "Wrong!";
      }
      document.getElementById("feedbackPanel").hidden = false;
    };

    //        document.getElementById("result").innerHTML = "Correct!";
    //        document.getElementById("result").innerHTML = "Wrong!";
    //        document.getElementById("feedbackPanel").hidden = false;