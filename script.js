    
    // The array of questions for our quiz game.
    var questions = [
      { q: "Question 1.", a: "a" },
      { q: "Question 2.", a: "b" },
      { q: "Question 3.", a: "c" },
      { q: "Question 4.", a: "d" },
      { q: "Question 5.", a: "e" }
    ];

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