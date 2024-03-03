function getComputerChoice() {
    let selection, 
    randomNumber = Math.round(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            selection = "Rock";
            break;
        case 2:
            selection = "Paper";
            break;
        case 3:
            selection = "Scissors";
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
            selection = "Rock";
            break;
        case "paper":
            selection = "Paper";
            break;
        case "scissors":
            selection = "Scissors";
            break;
    }

    return selection;
}

function playRound(getComputerChoice, getPlayerChoice) {
    let result;

    if (getComputerChoice() !== getPlayerChoice()){
        switch (getComputerChoice, getPlayerChoice) {
            case ("Rock", "Paper" || "Paper", "Rock"):
                result = "Paper beats Rock";

                if (getPlayerChoice() == "Paper") {
                    result = "You Win! " + result;
                } else {
                    result = "You Lose! " + result;
                }
                break;
            case ("Scissors", "Paper" || "Paper", "Scissors"):
                result = "Scissors beats Paper"

                if (getPlayerChoice() == "Scissors") {
                    result = "You Win! " + result;
                } else {
                    result = "You Lose! " + result;
                }
                break;
            case ("Rock", "Scissors" || "Scissors", "Rock"):
                result = "Rock beats Scissors";

                if (getPlayerChoice() == "Rock") {
                    result = "You Win! " + result;
                } else {
                    result = "You Lose! " + result;
                }
                break;
        }    
    } else {
        result = alert("It's a tie!");
    }   

    return result;
}