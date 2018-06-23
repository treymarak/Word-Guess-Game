//make variables...
var getQuestions = [
    { question: "Where do the Simpson's live?", answer: "springfield" },
    { question: "What does Homer drink?", answer: "duff beer" },
    { question: "Who is Bart's bestfriend?", answer: "milhouse" },
    { question: "What is the name of Bart's dog?", answer: "santas little helper" },
    { question: "Who shot Mr. Burns?", answer: "maggie simpson" },
    { question: "What instrument does Lisa play?", answer: "saxophone" },
    { question: "Who is always trying to kill Bart?", answer: "sideshow bob" },
    { question: "What is the name of the Simpson's next door neighbor?", answer: "ned flanders" },
    { question: "What is the name of the bar where Homer drinks?", answer: "moes tavern" },
    { question: "Who is Mr Burns' assistant?", answer: "waylon smithers" }
  ];

  
 var guessRemaining = 0;
 var guesses = [];
 var correctGuesses = [];
 var wrongGuesses = [];
 var currentQuestion;
 var display = ''; 
 var score = 0;

var audio = new Audio("assets/audio/The_Simpsons_Opening.mp3");

// make elements...to connect to the html

var ask = document.getElementById("ask");
var section = document.getElementById("section");
var total = document.getElementById("total");


// create functions...


function startUp() { 
  return getQuestions[Math.floor(Math.random() * getQuestions.length)];
  
 }




  function restart(){

    audio.pause();
    guessRemaining = 0;
    guesses = [];
    currentQuestion = startUp();
    display = '';
    score = 0;
    

    for (var i = 0; i < currentQuestion.answer.length; i++){
      if (currentQuestion.answer.charAt(i) !== " "){
         display += "_";
         score += 1;

      }

      else {
        display += " ";
      }
    }

    section.textContent = display;

    ask.textContent = currentQuestion.question;
  }

  


   document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var answer  = currentQuestion.answer.toLowerCase();
    var
    // console.log(event.key);

    // audio = new Audio("assets/audio/The_Simpsons_Opening.mp3");
    //     audio.play();
   
    for (var i = 0; i < guesses.length; i++) {
      
        if (guesses[i] === event.key) {
         
          return;
        }

    }
      // console.log("Past duplicate check")
      guesses.push(event.key);
      console.log(guesses);

      console.log(answer, userGuess)


    if (guesses.indexOf(answer)) {

      
       
    }

    else {

      wrongGuesses;

    }

    console.log('arrays', correctGuesses, wrongGuesses);
      
      var hiddenAnswer = '';
      var correct_guess = false;

      for (var i = 0; i < currentQuestion.answer.length; i++) {
 
 
      if (userGuess === currentQuestion.answer.charAt(i)) {
          hiddenAnswer += answer.charAt(i);
          // correctGuesses += currentQuestion.answer.charAt(i);
          correct_guess = true;
          audio = new Audio("assets/audio/woohoo.mp3");
        audio.play();

         }
         else {
           hiddenAnswer += display.charAt(i);
           guessRemaining--; 
         }
      }
         // console.log("sanity check")
      if (correct_guess === false) {
        guessRemaining++;
        audio = new Audio("assets/audio/doh1.mp3");
        audio.play();
        
        if (guessRemaining === 7 ){

        }
      }


      section.textContent = hiddenAnswer;

      total.textContent = score;

   if (score === 0) {

    // audio = new Audio("assets/audio/The_Simpsons_Ending.mp3");
    //     audio.play();
   }

  }



  restart();











