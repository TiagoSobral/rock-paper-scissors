
//USER INPUT
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

//COMPUTER INPUT
function getHumanChoice() {
    let userAnswer = prompt("Rock, Paper, Scissors: ");
    if (userAnswer.toUpperCase() === "ROCK" || userAnswer.toUpperCase() === "PAPER" || userAnswer.toUpperCase() === "SCISSORS" ) {
        return userAnswer.toUpperCase();
    }
    else if (userAnswer === "" || userAnswer === null || userAnswer === undefined) {
        console.log("Unknown Command! Try Again with Rock, Paper or Scissors");
        getHumanChoice();
    // here the function will return to the initial stage if user doesn't answer properly.
    }
    else {
       console.log("Wrong Input! Try Rock, Paper or Scissors!");
       getHumanChoice();
    }
}

//GLOBAL VARIABLES
let humanScore = 0;
let computerScore = 0;

//GAME
function playGame() {

//ONE ROUND
function playRound(humanChoice, computerChoice) {
   if (humanChoice === undefined) {
    return;
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

//LOCAL VARIABLES
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//CALLING PLAYROUND FUNCTION
playRound(humanSelection,computerSelection);
}


//LOOP FOR 5 ROUNDS!
for (i = 1; i < 6; i++) {
    console.log("Round:", i)
    playGame();
    console.log("");
}

//GAME WINNER MESSAGE POSSIBLITIES
if (humanScore > computerScore) {
    console.log("The User Wins the Game!");
}
else if (humanScore === computerScore) {
    console.log("Nobody Wins!");
}
else {
    console.log("The Computer Wins the Game!");
}
