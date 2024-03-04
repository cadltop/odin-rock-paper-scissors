function getComputerChoice() {
    let selection, 
    randomNumber = Math.round(Math.random() * 3 + 1);
    
    return randomNumber;
}

function getPlayerChoice() {
    let selection, 
    newPrompt = (prompt("Type your choice:\n- Rock\n- Paper\n-Scissors", "")),
    userInput = newPrompt.toLowerCase();

    switch (userInput) {
        case "rock":
            selection = 1;
            break;
        case "paper":
            selection = 2;
            break;
        case "scissors":
            selection = 3;
            break;
    }

    return selection;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(computerSelection,playerSelection);
function playRound(computerSelection, playerSelection) {
    let result;

    if (computerSelection !== playerSelection) {
        switch (computerSelection, playerSelection) {
            case ((1, 2) || (2, 1)):
                result = "Paper beats Rock";

                if (playerSelection === 2) {
                    result = "You Win! " + result;
                } else {
                    result = "You Lose! " + result;
                }
                break;
            case ((2, 3) || (3, 2)):
                result = "Scissors beats Paper"

                if (playerSelection === 3) {
                    result = "You Win! " + result;
                } else {
                    result = "You Lose! " + result;
                }
                break;
            case ((3, 1) || (1, 3)):
                result = "Rock beats Scissors";

                if (playerSelection === 1) {
                    result = "You Win! " + result;
                } else {
                    result = "You Lose! " + result;
                }
                break;
        }

        return result;    
    } else {
        alert("It's a tie!");
    }   
}

console.log(playRound(computerSelection, playerSelection));