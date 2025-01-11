
const body = document.querySelector("body");

const groupedBtns = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const rockImg = document.createElement("img");
const paperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

const game = document.createElement("div");
const groupedRounds = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");

groupedBtns.classList.toggle("buttons");
game.classList.toggle("game");
groupedRounds.classList.toggle("round-message");
score.classList.toggle("score");
winner.classList.toggle("winner");

rockImg.src = "./images/rock.png";
rockImg.textContent = "ROCK";
paperImg.src = "./images/paper.png";
paperImg.textContent = "PAPER";
scissorsImg.src = "./images/scissors.png";
scissorsImg.textContent = "SCISSORS";

body.appendChild(groupedBtns);
groupedBtns.appendChild(rock);
groupedBtns.appendChild(paper);
groupedBtns.appendChild(scissors);

rock.appendChild(rockImg);
paper.appendChild(paperImg);
scissors.appendChild(scissorsImg);

body.appendChild(game);
body.appendChild(groupedRounds);
body.appendChild(score);
body.appendChild(winner);

rockImg.setAttribute("style", "width: 70px");
rock.setAttribute("style", "border-radius: 10px");

paperImg.setAttribute("style", "width: 70px");
paper.setAttribute("style", "border-radius: 10px");

scissorsImg.setAttribute("style", "width: 70px");
scissors.setAttribute("style", "border-radius: 10px");

groupedBtns.style.display = "flex";
groupedBtns.style.justifyContent = "space-evenly";
groupedBtns.style.backgroundColor = "gray";
groupedBtns.style.padding = "20px"



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
    game.textContent = `You Choose: ${btnAnswer}! Computer Chooses: ${computerChoice}!`;
    
    
    //when it's tie
    if (humanChoice === "ROCK" && computerChoice === "ROCK" 
    || humanChoice === "PAPER" && computerChoice === "PAPER" 
    || humanChoice === "SCISSORS" && computerChoice === "SCISSORS") { 
        groupedRounds.textContent = "It's a Tie!"
        roundNumber++;
        }
    
    //when user wins
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" 
    || humanChoice === "PAPER" && computerChoice === "ROCK" 
    || humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        groupedRounds.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        roundNumber++;
        }
    //when computer wins
    else {
        groupedRounds.textContent = `You Loose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        roundNumber++;
        }



    //else    
    }
//playRound
}  
playRound(btnAnswer,getComputerChoice());

score.textContent = `User ${humanScore} - ${computerScore} Computer`;

if (humanScore === 5) {
    winner.textContent = "You Won!";
    humanScore = 0;
    computerScore = 0;
}
else if (computerScore === 5) {
    winner.textContent = "You Lost";
    humanScore = 0;
    computerScore = 0;
}

}


