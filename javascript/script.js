

/* 
Planing:
- the program has no interface
- the only interaction will be the user choosing rock, paper or scissors.
- the user will have to input the data, (a string into the console).
- the desired output will be to compare the input from the user versus the output from the computer and compare to see who wins.
- the game will be a best of 3 (possibly)


- the computer chooses randomly rock, paper or scissors.
- the user chooses rock paper or scissors.
- what did the computer choose?
- what did the user choose?
- rock beats scissors; scissors beats paper; paper beats rock;



Pseudocode:
- when the user inputs a string : "Rock", "Paper" or "Scissors";
- the computer should randomize and output one of the same 3 choices.
- if the user chooses rock and computer scissors print (computer looses)
- if the user chooses scissors and computer chooses paper print (computer looses) 
- if the user chooses paper and computer rock print (computer looses.)
- if the user chooses the same as the computer print (its a tie! try again!)
- else print (user looses! Play again!)
*/



/*create a function named getComputerChoice 
(used a numer to attach to a specific string in order to return the string
when computer randomizes the number that outputs.*/

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
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
       return userAnswer.toLowerCase();
    }
}


/* create 2 new variable names humanScore & computerScore
in the global scope */

let humanScore = 0;
let computerScore = 0;


/* create a new function named playRound */

function playRound(humanChoice, computerChoice) {
    console.log(`User Chooses: ${humanChoice}!`);
    console.log(`Computer Chooses: ${computerChoice}!`);
    
    //when it's tie
    if (humanChoice === "rock" && computerChoice === "rock" 
    || humanChoice === "paper" && computerChoice === "paper" 
    || humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;  
    }
    
    //when user wins
    else if (humanChoice === "rock" && computerChoice === "scissors" 
    || humanChoice === "paper" && computerChoice === "rock" 
    || humanChoice === "scissors" && computerChoice === "paper"){
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


/* create playGame */

function playGame() {
    
}




/* Pseudocode for step 5:
- playGame function calls playRound 
- play 5 times
- keep track of score
- declares winner at the end
