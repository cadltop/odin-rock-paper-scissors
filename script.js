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