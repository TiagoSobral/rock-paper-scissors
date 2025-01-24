
const body = document.querySelector("body");

const gameTitle = document.createElement("h1");

const groupedBtns = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const rockImg = document.createElement("img");
const paperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

const game = document.createElement("div");
const userChoiceImg = document.createElement("div");
const userImg = document.createElement("img");
const cpuChoiceImg = document.createElement("div");
const cpuImg = document.createElement("img");

const user = document.createElement("div");
const cpu = document.createElement("div");

const groupedRounds = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");

gameTitle.classList.toggle("title");
groupedBtns.classList.toggle("buttons");
game.classList.toggle("game");
groupedRounds.classList.toggle("round-message");
score.classList.toggle("score");
winner.classList.toggle("winner");

gameTitle.textContent = "ROCK, PAPER, SCISSORS!";
groupedRounds.textContent = "LET'S PLAY! THE BEST OF 5 WINS";
rockImg.src = "./images/rock.png";
rockImg.textContent = "ROCK";
paperImg.src = "./images/paper.png";
paperImg.textContent = "PAPER";
scissorsImg.src = "./images/scissors.png";
scissorsImg.textContent = "SCISSORS";

body.appendChild(gameTitle);
body.appendChild(groupedRounds);
body.appendChild(winner);
body.appendChild(game);
body.appendChild(score);
score.appendChild(user);
score.appendChild(cpu);

body.appendChild(groupedBtns);
groupedBtns.appendChild(rock);
groupedBtns.appendChild(paper);
groupedBtns.appendChild(scissors);

rock.appendChild(rockImg);
paper.appendChild(paperImg);
scissors.appendChild(scissorsImg);

game.appendChild(userChoiceImg);
game.appendChild(cpuChoiceImg);
cpuChoiceImg.appendChild(cpuImg);
userChoiceImg.appendChild(userImg);

groupedBtns.style.display = "flex";
groupedBtns.style.justifyContent = "space-evenly";
groupedBtns.style.padding = "40px"

rockImg.style.width = "70px";
rock.style.borderRadius = "10px";

paperImg.style.width = "70px";
paper.style.borderRadius = "10px";

scissorsImg.style.width = "70px";
scissors.style.borderRadius = "10px";

const btn = document.querySelectorAll("button");

btn.forEach( (button) => {
    button.addEventListener("mousedown", () => {
        groupedRounds.textContent = "";
        winner.textContent = "";
        btnAnswer = button.textContent;

        if (btnAnswer === "ROCK") {
            userImg.src = "./images/rock.png"
            
        }
        else if (btnAnswer === "PAPER") {
            userImg.src = "./images/paper.png"
        }
        else {
            userImg.src = "./images/scissors.png"
        }    

        playGame();
    })
});



function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        cpuImg.src = "./images/rock.png"
        return "ROCK";
        }
    else if (randomNum === 1) {
        cpuImg.src = "./images/paper.png"
        return "PAPER";
        }
    else {
        cpuImg.src = "./images/scissors.png"
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
let roundNumber = 0;

user.textContent = ` YOU: ${humanScore} `;
cpu.textContent = ` CPU: ${computerScore} `;


//GAME
function playGame() {

//ONE ROUND
function playRound(humanChoice, computerChoice) {
   if (humanChoice === "" || humanChoice === null || humanChoice === undefined) {
    playGame();
        }    
   else {  
    
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

user.textContent = ` YOU: ${humanScore} `;
cpu.textContent = ` CPU: ${computerScore} `;

//score.textContent = `User ${humanScore} - ${computerScore} Computer`;


// if (roundNumber > 5) {
//     roundNumber = 0;
//     humanScore = 0;
//     computerScore = 0;
//     cpuChoiceImg.remove;
//     userChoiceImg.removeAttribute("src");
// }

if (humanScore === 5) {
    winner.textContent = "You Won!";
    humanScore = 0;
    computerScore = 0;
    userChoiceImg.remove();
    cpuChoiceImg.remove();
    
}
else if (computerScore === 5) {
    winner.textContent = "You Lost";
    humanScore = 0;
    computerScore = 0;
    userChoiceImg.remove();
    cpuChoiceImg.remove();
}

}


