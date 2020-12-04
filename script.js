    // Psuedo Code Draft
    // Need Start Quiz button click to start a timer, change question, hid text, replace text in Text Holder
    // Need answer to be recognized as correct or incorrect with feedback footer changed 
    // Need score adjusted and new question and answers to follow
    // Need either time or score to end quiz 




    // The array of questions for our quiz game.
    var questions = [
      { q: "Question 1.", a: "a" },
      { q: "Question 2.", a: "b" },
      { q: "Question 3.", a: "c" },
      { q: "Question 4.", a: "d" },
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
