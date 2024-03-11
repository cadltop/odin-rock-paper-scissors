function playGame() {

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
    
    function playRound(computerSelection, playerSelection) {
        let result = null;
        displayResult(computerSelection, playerSelection);
    
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

    const rockBtn = document.querySelector('.rock-btn');
    const paperBtn = document.querySelector('.paper-btn');
    const scissorsBtn = document.querySelector('.scissors-btn');

    rockBtn.addEventListener('click', () => {
        const computerSelection = Math.round(Math.random() * 3 + 1);
        const playerSelection = 1;
        playRound(computerSelection, playerSelection);
    });

    paperBtn.addEventListener('click', () => {
        const computerSelection = Math.round(Math.random() * 3 + 1);
        const playerSelection = 2;
        playRound(computerSelection, playerSelection);
    });

    scissorsBtn.addEventListener('click', () => {
        const computerSelection = Math.round(Math.random() * 3 + 1);
        const playerSelection = 3;
        playRound(computerSelection, playerSelection);
    });

}

playGame();