

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
        return "Computer Chooses: rock!";
    }
    else if (randomNum === 1) {
        return "Computer Chooses: paper!";
    }
    else {
        return "Computer Chooses: scissors!";
    }
}

/* get human choice function: (used lower case function
to receive any type of input from user.) */


function getHumanChoice() {
    let userAnswer = prompt("Rock, Paper, Scissors: ");
    if (userAnswer === "" || userAnswer === null || userAnswer === undefined) {
        alert("Unknown Command! Try Again");
        return getHumanChoice();
    }
    else {
    return `User Chooses: ${userAnswer.toLocaleLowerCase()}!`;
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice());

/* create 2 new variable names humanScore & computerScore
in the global scope */

let humanScore = 0;
let computerScore = 0;
let scoreTracker = `Score: Human ${humanScore} - ${computerScore} Computer`;


/* create a new function named playRound */

function playRound(humanChoice, computerChoice) {

}


/* using if when user ties time, to organize code, using && and || */

/* using if when user loses every time, to organize code, using && and || */

/* using if when user wins every time, to organize code, using && and || */


/* create if statement to see who wins:
if (userChoice === rock) {
    if computerChoice === scissors;
        print("Computer Looses!")
    else if computerChoice === rock;
        print ("Its a tie! Try Again!")
    else print ("You Loose! Try Again!")
}
else if (userChoice === scissors) {
    if computerChoice === paper;
        print("Computer Looses!")
    else if computerChoice === scissors;
        print ("Its a tie! Try Again!")
    else print ("You Loose! Try Again!")
}
else {
    if computerChoice === rock;
        print("Computer Looses!")
    else if computerChoice === paper;
        print ("Its a tie! Try Again!")
    else print ("You Loose! Try Again!")
} 

*/