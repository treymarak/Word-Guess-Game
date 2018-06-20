//make variables...
var questions = [
    { q: "Where do the Simpson's live?", a: "Springfield" },
    { q: "What does Homer drink?", a: "Duff Beer" },
    { q: "Who is Bart's bestfriend?", a: "Milhouse" },
    { q: "What is the name of Bart's dog?", a: "Santa's Little Helper" },
    { q: "Who shot Mr. Burns?", a: "Maggie Simpson" },
    { q: "What instrument does Lisa play?", a: "Saxophone" },
    { q: "Who is always trying to kill Bart?", a: "Sideshow Bob" },
    { q: "What is the name of the Simpson's next door neighbor?", a: "Ned Flanders" },
    { q: "What is the name of the bar where Homer drinks?", a: "Moe's Tavern" },
    { q: "Who is Mr Burns' assistant?", a: "Waylon Smithers" }
  ];


var pickedQuestion;
  
 var score = 0;
 var questionIndex = 0;
 var guess;
 var guesses = [ ];
 var counter;
 var space;

 function startupNew() {
   pickedQuestion = questions[Math.floor(Math.random() * questions.length)];
   
   var question = pickedQuestion.q;

   document.getElementById("ask").innerHTML = question;

   
 }

var answer = 

 // Elements...





 //Question section...

 



 //Answer section...

//  document.onkeyup = function(event) {
//         userText.textContent = event.key;
//         event.key.toLowerCase();

// };



startupNew();


