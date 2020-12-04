    // Psuedo Code Draft

    // Need quiz to start from a welcome position.
    document.getElementById("startBtn").addEventListener("click", function() {
      document.getElementById("start").hidden = true;
      document.getElementById("quiz").hidden = false;
    }, false);

    // The array of questions for our quiz game.
    var questions = [
      { q: "Question 1", c: ["1","2", "3", "4"], a: "1" },
      { q: "Question 2", c: ["1","2", "3", "4"], a: "2" },
      { q: "Question 3", c: ["1","2", "3", "4"], a: "3" },
      { q: "Question 4", c: ["1","2", "3", "4"], a: "4" },
    ];

    // Need Bottom Btn to change start a timer, change question, hid text, replace text in Text Holder
    // Need answer to be recognized as correct or incorrect with feedback footer changed 
    // Need score adjusted and new question and answers to follow
    // Need either time or score to end quiz 

/*
    // We start the game with a score of 0.
    var score = 0;

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
