var questions = [
    { q: "Where do the Simpson's live?", a: "Springfield" },
    { q: "What does Homer drink?", a: "Duff Beer" },
    { q: "Who is Bart's bestfriend?", a: "Milhouse" },
    { q: "What is the name of Bart's dog?", a: "Santa's Little Helper" },
    { q: "Who shot Mr.s Burns?", a: "Maggie Simpson" },
    { q: "What instrument does Lisa play?", a: "Saxophone" },
    { q: "Who is always trying to kill Bart?", a: "Sideshow Bob" },
    { q: "What is the name of the Simpson's next door neighbor?", a: "Ned Flanders" },
    { q: "What is the name of the bar where Homer drinks?", a: "Moe's Tavern" },
    { q: "Who is Mr Burns' assistant?", a: "Waylon Smithers" }
  ];

  var score = 0;
  var questionIndex = 0;


    // Function to render questions.
    function renderQuestion() {
      // If there are still more questions, render the next one.
      if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#ask").innerHTML = questions[questionIndex].q;
      }
      // If there aren't, render the end game screen.
      else {
        document.querySelector("#ask").innerHTML = "Game Over!";
        document.querySelector("#total").innerHTML = "Final Score: " + score + " out of " + questions.length;
      }
    }

    // Function that updates the score...
    function updateScore() {
      document.querySelector("#total").innerHTML = "Score: " + score;
    }