  // This sets up the Array used to drive the questions, choices, and answer.
  var questions = [
    { q: "Question 1", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 1 },
    { q: "Question 2", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 2 },
    { q: "Question 3", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 3 },
    { q: "Question 4", c: ["1. Option", "2. Option", "3. Option", "4. Option"], a: 4 },
  ];

  // Start quiz from a welcome position and activate quiz.
  document.getElementById("startBtn").addEventListener("click", runQuiz)

  function runQuiz(score){
    //Starts timer when startBtn is clicked.

    //Hid and unhide appropriate divs.
    document.getElementById("start").hidden = true;
    document.getElementById("quiz").hidden = false;

    //Establish initial conditions and loop.
    for (var i = 0; i < questions.length; i++) {
console.log("21 is " + i);
      var score = 0;
console.log("line 23 is " + score);
      var a = questions[i].a;
console.log("a is: "+ a);

      //Changes Question and Answer Text in quiz div using questions object.
      document.getElementById("questionText").innerHTML = questions[i].q;
      document.getElementById("c1Btn").innerHTML = questions[i].c[0];
      document.getElementById("c2Btn").innerHTML = questions[i].c[1];
      document.getElementById("c3Btn").innerHTML = questions[i].c[2];
      document.getElementById("c4Btn").innerHTML = questions[i].c[3];

      //Listen for a button to be clicked to run feedback.
      document.getElementById("c1Btn").addEventListener("click", function(){ clicked(1)});
      document.getElementById("c2Btn").addEventListener("click", function(){ clicked(2)});
      document.getElementById("c3Btn").addEventListener("click", function(){ clicked(3)});
      document.getElementById("c4Btn").addEventListener("click", function(){ clicked(4)});

      //Set and check answer.
      function clicked(c){

        if (c==a){
        document.getElementById("result").innerHTML = "Correct!";
        newScore = 10;
console.log("46 is: " + newScore);
console.log("47 is: " + i);

        } else {
        document.getElementById("result").innerHTML = "Wrong!";
        newScore = -10;
console.log("52 is: " + newScore);
console.log("53 is: " + i);
        }

        document.getElementById("feedbackPanel").hidden = false;
        score = newScore;
      };
    };
  }