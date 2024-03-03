const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

function getComputerChoice() {
    let selection, 
    randomNumber = Math.round(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            selection = ROCK;
            break;
        case 2:
            selection = PAPER;
            break;
        case 3:
            selection = SCISSORS;
            break;
    }

    return selection;
}

function getPlayerChoice() {
    let selection, 
    newPrompt = (prompt("Type your choice:\n- Rock\n- Paper\n-Scissors", "")),
    userChoice = newPrompt.toLowerCase();

    switch (userChoice) {
        case "rock":
            selection = ROCK;
            break;
        case "paper":
            selection = PAPER;
            break;
        case "scissors":
            selection = SCISSORS;
            break;
    }

    return selection;
}