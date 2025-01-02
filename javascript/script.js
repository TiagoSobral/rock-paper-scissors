
const body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "ROCK";
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
body.appendChild(scissors);

const btns = document.querySelectorAll("button");


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

function getHumanChoice() {
    let userAnswer = btnAnswer;
    if (userAnswer === null) {
        console.log("Wrong Input! Try Rock, Paper or Scissors!");
        /* return getHumanChoice is important so it is called again and we can retrieve its value after. 
        Otherwise it doesn't return a value hence the blank outputs. */
        return getHumanChoice();
        }
    else if (userAnswer.toUpperCase() === "ROCK" || userAnswer.toUpperCase() === "PAPER" || userAnswer.toUpperCase() === "SCISSORS" ) {
        return userAnswer.toUpperCase();
        }
    else {
       console.log("Wrong Input! Try Rock, Paper or Scissors!");
       userAnswer;
       return getHumanChoice();
        }
}

//GLOBAL VARIABLES
let humanScore = 0;
let computerScore = 0;


//GAME
function playGame() {

//ONE ROUND
function playRound(humanChoice, computerChoice) {
   if (humanChoice === "" || humanChoice === null || humanChoice === undefined) {
    playGame();
        }    
   else { 
    //console.log("Round:", i);
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
    
    console.log(`Score: User ${humanScore} - ${computerScore} Computer`);
    console.log("");
    //else    
    }
//playRound
}
//loop   
btns.forEach( (button) => {
    button.addEventListener("click", () => {
        btnAnswer = button.textContent;
        playRound(btnAnswer,getComputerChoice());
    })
});


/*let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
}
*/

playGame();

/*let i = 1;
for (i = 1; i < 6; i++) {
    playGame();
}
*/

if (humanScore > computerScore) {
    console.log("The User Wins the Game!");
}
else if (humanScore === computerScore) {
    console.log("Nobody Wins!");
}
else {
    console.log("The Computer Wins the Game!");
}
