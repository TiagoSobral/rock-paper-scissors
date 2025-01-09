
const body = document.querySelector("body");

const groupedBtns = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const game = document.createElement("div");
const groupedRounds = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");

groupedBtns.classList.toggle("buttons");
game.classList.toggle("game");
groupedRounds.classList.toggle("round-message");
score.classList.toggle("score");
winner.classList.toggle("winner");

rock.textContent = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";

body.appendChild(groupedBtns);
groupedBtns.appendChild(rock);
groupedBtns.appendChild(paper);
groupedBtns.appendChild(scissors);

body.appendChild(game);
body.appendChild(groupedRounds);
body.appendChild(score);
body.appendChild(winner);

const btn = document.querySelectorAll("button");

btn.forEach( (button) => {
    button.addEventListener("mousedown", () => {
        btnAnswer = button.textContent;
        playGame();
    })
});



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
let roundNumber = 1;


//GAME
function playGame() {

//ONE ROUND
function playRound(humanChoice, computerChoice) {
   if (humanChoice === "" || humanChoice === null || humanChoice === undefined) {
    playGame();
        }    
   else { 

    const round = document.createElement("div");
    const human = document.createElement("div");
    const computer = document.createElement("div");

    game.appendChild(round);
    round.appendChild(human);
    round.appendChild(computer);

    round.classList.add(`round-${roundNumber}`);
    human.textContent = `User Chooses: ${btnAnswer}!`
    computer.textContent = `Computer Chooses: ${computerChoice}!`
    
    
    //when it's tie
    if (humanChoice === "ROCK" && computerChoice === "ROCK" 
    || humanChoice === "PAPER" && computerChoice === "PAPER" 
    || humanChoice === "SCISSORS" && computerChoice === "SCISSORS") { 
        const tie = document.createElement("div");
        tie.textContent = "It's a Tie!"
        round.appendChild(tie);
        roundNumber++;
        }
    
    //when user wins
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" 
    || humanChoice === "PAPER" && computerChoice === "ROCK" 
    || humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        const userWin = document.createElement("div");
        userWin.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`
        round.appendChild(userWin)
        humanScore++;
        roundNumber++;
        }
    //when computer wins
    else {
        const cpuWin = document.createElement("div");
        cpuWin.textContent = `You Loose! ${computerChoice} beats ${humanChoice}!`
        round.appendChild(cpuWin);
        computerScore++;
        roundNumber++;
        }



    //else    
    }
//playRound
}  
playRound(btnAnswer,getComputerChoice());

if (roundNumber > 5) {
    if (humanScore > computerScore) {
        console.log("User Wins!");
    }
    else if (humanScore === computerScore) {
        console.log("Nobody Wins!");
    }
    else {
        console.log("The Computer Wins the Game!");
    }

}
//console.log(humanScore);
//console.log(computerScore);

}


/*let i = 1;
for (i = 1; i < 6; i++) {
    playGame();
}
*/


