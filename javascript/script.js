
/*create a function named getComputerChoice 
(used a numer to attach to a specific string in order to return the string
when computer randomizes the number that outputs.*/

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "ROCK";
    }
    else if (randomNum === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

/* get human choice function: (used lower case function
to receive any type of input from user.) */


function getHumanChoice() {
    let userAnswer = prompt("Rock, Paper, Scissors: ");
    if (userAnswer === "" || userAnswer === null || userAnswer === undefined) {
        alert("Unknown Command! Try Again with Rock, Paper or Scissors");
        getHumanChoice();
    // here the function will return to the initial stage if user doesn't answer properly.
    }
    else if (userAnswer.toUpperCase() === "ROCK" || userAnswer.toUpperCase() === "PAPER" || userAnswer.toUpperCase() === "SCISSORS" ) {
        return userAnswer.toUpperCase();
    }
    else {
       alert("Wrong Input! Try Rock, Paper or Scissors!");
    }
}

/* create 2 new variable names humanScore & computerScore
in the global scope */

let humanScore = 0;
let computerScore = 0;



function playGame() {

/* create a new function named playRound */

function playRound(humanChoice, computerChoice) {
   if (humanChoice === undefined) {
    return "Invalid Command!";
   }    
   else { 
    console.log(`User Chooses: ${humanChoice}!`);
    console.log(`Computer Chooses: ${computerChoice}!`);
    
    //when it's tie
    if (humanChoice === "ROCK" && computerChoice === "ROCK" 
    || humanChoice === "PAPER" && computerChoice === "PAPER" 
    || humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log("It's a Tie!"); 
    }
    
    //when user wins
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" 
    || humanChoice === "PAPER" && computerChoice === "ROCK" 
    || humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    //when computer wins
    else {
        console.log(`You Loose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
    
// Score message with increment in it
console.log(`Score: User ${humanScore} - ${computerScore} Computer`);

}
}      

// variables that work as arguments in PlayRound Function

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


// Calling Function
playRound(humanSelection,computerSelection);

// Score message with increment in it
//console.log(`Score: User ${humanScore} - ${computerScore} Computer`);


// emply console log, to improve readability rounds

}



/* Loop to play 5 rounds of the game */

let i = playGame();

for (i = 1; i < 5; i++) {
    playGame();
    console.log("");
}

/* if statement to print win messsage at the end of the 5th round*/

if (humanScore > computerScore) {
    console.log("The User Wins the Game!");
}
else if (humanScore === computerScore) {
    console.log("Nobody Wins!");
}
else {
    console.log("The Computer Wins the Game!");
}





