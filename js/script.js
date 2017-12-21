//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var random = "";
var choices = ["rock", "paper", "scissors"];
var userChoice="";
var computerChoice="";
var winner="";
//FUNCTIONS

// DOCUMENT READY FUNCTION
$(document).ready (function(){
        
function compchoice(){
        randomizer();
        var selection = choices[random];
        computerChoice = selection; 
        console.log(computerChoice);
}
function randomizer(){
        random = Math.floor(Math.random()*3);
}        
function user(){
        var selection = $('.box').val();
        userChoice = selection; 
        console.log(userChoice);
}
function reset(){
        userChoice = "";
        computerChoice = "";
}


$('button').click(function(){
             reset();
             compchoice();
             userchoice();
      if (computerChoice === 'rock' && user === 'paper' || computerChoice === 'paper' && user === 'scissors'|| computerChoice === 'scissors' && user === 'rock'){
                    alert('You win!');
                    $("#a").append("<br /> You chose " +userChoice+ "   ");
                    $("#a").append("Computer chose " +computerChoice+ "  W");
            } else {
            if (computerChoice === 'rock' && user === 'scissors' || computerChoice === 'paper' && user === 'rock'|| computerChoice === 'scissors' && user === 'paper'){
                    alert('You LOSE!');
                    $("#a").append("<br /> You chose " +userChoice+ "   ");
                    $("#a").append("Computer chose " +computerChoice+ "  L");
            } else {
            if (computerChoice === 'rock' && user === 'rock' || computerChoice === 'paper' && user === 'paper'|| computerChoice === 'scissors' && user === 'scissors'){
                    alert('You TIE!');
                    $("#a").append("<br /> You chose " +userChoice+ "   ");
                    $("#a").append("Computer chose " +computerChoice+ "  T");
            } else {
            if (user !== 'rock' || user !== 'paper' || user !== 'scissors') {
                    alert("Do you not know how to play?");
            }  
            }
            }   
            }
    });
        
});

