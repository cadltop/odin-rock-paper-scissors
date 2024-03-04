function playGame() {
    function getComputerChoice() {
        let selection = null, 
        randomNumber = Math.round(Math.random() * 3 + 1);
        
        return randomNumber;
    }
    
    function getPlayerChoice() {
        let selection = null, 
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

    function displayResult(computerSelection, playerSelection) {
        switch (computerSelection) {
            case 1:
                console.log("Rock");
                break;
            case 2:
                console.log("Paper");
                break;
            case 3:
                console.log("Scissors");
                break;
        }

        switch (playerSelection) {
            case 1:
                console.log("Rock");
                break;
            case 2:
                console.log("Paper");
                break;
            case 3:
                console.log("Scissors");
                break;
        }
    }

    displayResult(computerSelection, playerSelection);
    
    function playRound(computerSelection, playerSelection) {
        let result = null;
    
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
            
            return console.log(result);    
        } else {
            console.log("It's a tie!");
        }   
    }

    playRound(computerSelection, playerSelection);   
}

playGame();
playGame();
playGame();
playGame();
playGame();