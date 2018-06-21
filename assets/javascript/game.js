//make variables...
var getQuestions = [
    { question: "Where do the Simpson's live?", answer: "Springfield" },
    { question: "What does Homer drink?", answer: "Duff Beer" },
    { question: "Who is Bart's bestfriend?", answer: "Milhouse" },
    { question: "What is the name of Bart's dog?", answer: "Santa's Little Helper" },
    { question: "Who shot Mr. Burns?", answer: "Maggie Simpson" },
    { question: "What instrument does Lisa play?", answer: "Saxophone" },
    { question: "Who is always trying to kill Bart?", answer: "Sideshow Bob" },
    { question: "What is the name of the Simpson's next door neighbor?", answer: "Ned Flanders" },
    { question: "What is the name of the bar where Homer drinks?", answer: "Moe's Tavern" },
    { question: "Who is Mr Burns' assistant?", answer: "Waylon Smithers" }
  ];

  
 var guess = 0;
 var guesses = [];
 var currentQuestion;
 var display = ''; 
 var score = 0;

var audio = new Audio("assets/audio/The_Simpsons_Opening.mp3");

// make elements...

var ask = document.getElementById("ask");
var section = document.getElementById("section");
var total = document.getElementById("total");


// create functions...


function startUp() { 
  return getQuestions[Math.floor(Math.random() * getQuestions.length)];
  
 }




  function restart(){

    audio.pause();
    guess = 0;
    guesses = [];
    currentQuestion = startUp();
    display = '';
    score = 0;
    

    for (var i = 0; i < currentQuestion.answer.length; i++){
      if (currentQuestion.answer.charAt(i) !== " "){
         display += "_";
         guess += 1;

      }

      else {
        display += " ";
      }
    }

    section.textContent = display;

    ask.textContent = currentQuestion.question;
  }

  


   document.onkeyup = function(event) {

    console.log(event.key);
   
    for (var i = 0; i < guesses.length; i++) {
      
        if (guesses[i] === event.key) {
          console.log("Already guessed");
          return;
        }

    }

      guesses.push(event.key);


      var string = '';
      var correct_guess = false;

      for (var i = 0; currentQuestion.answer.length; i++) {
        console.log("currentQuestion.answer = " + currentQuestion.answer);
        console.log(currentQuestion.answer.charAt(i).toUpperCase());

      if ((currentQuestion.answer.charAt(i).toUpperCase() == event.key) || 
         (currentQuestion.answer.charAt(i).toLowerCase() == event.key)) {
          string += currentQuestion.answer.charAt(i);
          guess--; 
          correct_guess = true;

         }
         else {
           string += display.charAt(i);
         }
      }

      if (correct_guess === false) {
        score++;
        audio = new Audio("assets/audio/doh1.mp3");
        audio.play();
        
        if (score === 7 ){

        }
      }

      display.string;

      section.textContent = display;

   if (guess === 0) {

    audio = new Audio("assets/audio/The_Simpsons_Ending.mp3");
        audio.play();
   }

  }



  restart();











