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
      { q: "Question 1", c: ["1", "2", "3", "4"], a: "1" },
      { q: "Question 2", c: ["1", "2", "3", "4"], a: "2" },
      { q: "Question 3", c: ["1", "2", "3", "4"], a: "3" },
      { q: "Question 4", c: ["1", "2", "3", "4"], a: "4" },
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
        document.getElementById("c1Btn").addEventListener("click", click);
        document.getElementById("c2Btn").addEventListener("click", click);
        document.getElementById("c3Btn").addEventListener("click", click);
        document.getElementById("c4Btn").addEventListener("click", click);

        //Change score based on answer and provide feedback.
        function click(event) {
          console.log("a button choice was clicked");
          document.getElementById("feedback").hidden = false;
        }

    // Need Bottom Btn to change start a timer, change question, hid text, replace text in Text Holder
    // Need answer to be recognized as correct or incorrect with feedback footer changed 
    // Need score adjusted and new question and answers to follow
    // Need either time or score to end quiz 

/*
    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
      // Display current question to user and ask OK/Cancel
      var answer = confirm(questions[i].q);

      // Compare answers
      if ((answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")) {
        // Increase score
        score++;
        alert("Correct!");
      }
      else {
        alert("Wrong!");
      }
    }

    // Show total at end
    alert("You got " + score + "/" + questions.length);

    // Add event listener to start quiz.
    startBtn.addEventListener("click", writePassword);

*/
