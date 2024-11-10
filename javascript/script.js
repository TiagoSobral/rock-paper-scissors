console.log("Hello World!");

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


// create a function named getComputerChoice

function getComputerChoice(choice) {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return choice = "rock";
    }
    else if (randomNum === 1) {
        return choice = "paper";
    }
    else {
    return choice = "scissors";
    }
}

console.log(getComputerChoice());


/* make computer randomize between in code between 0 1 2. 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    console.log(getRandomInt(3));
}
*/
/* if statement to tell which number belongs to which string 

if (getRandomInt() === 0) {
    getComputerChoice = "Rock";
}
else if (getRandomInt() === 1) {
    getComputerChoice = "Paper";
}
else {
    getComputerChoice = "Scissors";
}

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