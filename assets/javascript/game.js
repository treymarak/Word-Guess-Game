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

  
 var guessRemaining = 7;
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
    guessRemaining = 7;
    guesses = [];
    currentQuestion = startUp();
    display = '';
    score = 0;
    

    for (var i = 0; i < currentQuestion.answer.length; i++){
      if (currentQuestion.answer.charAt(i) !== " "){
         display += "_";
        //  guessRemaining += 1;

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
    audio = new Audio("assets/audio/The_Simpsons_Opening.mp3");
        audio.play();
   
    for (var i = 0; i < guesses.length; i++) {
      
        if (guesses[i] === event.key) {
         
          return;
        }

    }
      console.log("Past duplicate check")
      guesses.push(event.key);

      var userGuess = event.key.toLowerCase();
      var string = '';
      var correct_guess = false;

      for (var i = 0; i < currentQuestion.answer.length; i++) {
 

      if (userGuess === currentQuestion.answer.charAt(i)) {
          string += currentQuestion.answer.charAt(i);
          guessRemaining--; 
          correct_guess = true;
          audio = new Audio("assets/audio/woohoo.mp3");
        audio.play();

         }
         else {
           string += display.charAt(i);
         }
      }
         console.log("sanity check")
      if (correct_guess === false) {
        score++;
        audio = new Audio("assets/audio/doh1.mp3");
        audio.play();
        
        if (score === 10 ){

        }
      }

      display.string;

      section.textContent = display;

   if (guessRemaining === 7) {

    audio = new Audio("assets/audio/The_Simpsons_Ending.mp3");
        audio.play();
   }

  }



  restart();











