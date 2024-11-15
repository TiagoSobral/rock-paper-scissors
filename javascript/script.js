

/* 
Planing:
- the program has no interface
- the only interaction will be the user choosing ROCK, PAPER or SCISSORS.
- the user will have to input the data, (a string into the console).
- the desired output will be to compare the input from the user versus the output from the computer and compare to see who wins.
- the game will be a best of 3 (possibly)


- the computer chooses randomly ROCK, PAPER or SCISSORS.
- the user chooses ROCK PAPER or SCISSORS.
- what did the computer choose?
- what did the user choose?
- ROCK beats SCISSORS; SCISSORS beats PAPER; PAPER beats ROCK;



Pseudocode:
- when the user inputs a string : "Rock", "PAPER" or "Scissors";
- the computer should randomize and output one of the same 3 choices.
- if the user chooses ROCK and computer SCISSORS print (computer looses)
- if the user chooses SCISSORS and computer chooses PAPER print (computer looses) 
- if the user chooses PAPER and computer ROCK print (computer looses.)
- if the user chooses the same as the computer print (its a tie! try again!)
- else print (user looses! Play again!)
*/



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
        alert("Unknown Command! Try Again");
        getHumanChoice();
    // here the function will return to the initial stage if user doesn't answer properly.
    }
    else {
       return userAnswer.toUpperCase();
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(human,computer) {

    /* create 2 new variable names humanScore & computerScore
in the global scope */



/* create a new function named playRound */

function playRound(humanChoice, computerChoice) {
    console.log(`User Chooses: ${humanChoice}!`);
    console.log(`Computer Chooses: ${computerChoice}!`);
    
    //when it's tie
    if (humanChoice === "ROCK" && computerChoice === "ROCK" 
    || humanChoice === "PAPER" && computerChoice === "PAPER" 
    || humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log("It's a tie!");
        humanScore++;
        computerScore++; 
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
}      

// variables that work as arguments in PlayRound Function

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


// Calling Function
playRound(humanSelection,computerSelection);

// Score message with increment in it
console.log(`Score: User ${humanScore} - ${computerScore} Computer`);

console.log("");

}

let i = playGame();

for (i = 1; i < 5; i++) {
    if (i < 5) {
        playGame();
    }
    else {
        console.log("The Winner is sdadsada");
    }
}

/* 
- store human score
- store computer score

- return human score
- return computer score

- add human score to new one
- add computer score to new one */



