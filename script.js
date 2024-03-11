function playGame() {

    function displayResult(computerSelection, playerSelection) {
        const resultsDiv = document.querySelector('.results');
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        const computerDiv = document.createElement('div');
        computerDiv.classList.add('computer');

        if (document.querySelector('.results-txt').nextElementSibling === null) {
            switch (playerSelection) {
                case 1:
                    playerDiv.textContent = 'Rock';
                    break;
                case 2:
                    playerDiv.textContent = 'Paper';
                    break;
                case 3:
                    playerDiv.textContent = 'Scissors';
                    break;
            }
    
            switch (computerSelection) {
                case 1:
                    computerDiv.textContent = 'Rock';
                    break;
                case 2:
                    computerDiv.textContent = 'Paper';
                    break;
                case 3:
                    computerDiv.textContent = 'Scissors';
                    break;
            }
            
            resultsDiv.appendChild(playerDiv);
            resultsDiv.appendChild(computerDiv);
        } else {
            switch (playerSelection) {
                case 1:
                    document.querySelector('.player').innerHTML = 'Rock';
                    break;
                case 2:
                    document.querySelector('.player').innerHTML = 'Paper';
                    break;
                case 3:
                    document.querySelector('.player').innerHTML = 'Scissors';
                    break;
            }
    
            switch (computerSelection) {
                case 1:
                    document.querySelector('.computer').innerHTML = 'Rock';
                    break;
                case 2:
                    document.querySelector('.computer').innerHTML = 'Paper';
                    break;
                case 3:
                    document.querySelector('.computer').innerHTML = 'Scissors';
                    break;
            }
        }
    }
    
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

                    displayResult(computerSelection, playerSelection);
                    break;
                case ((2, 3) || (3, 2)):
                    result = "Scissors beats Paper"
    
                    if (playerSelection === 3) {
                        result = "You Win! " + result;
                    } else {
                        result = "You Lose! " + result;
                    }
                    
                    displayResult(computerSelection, playerSelection);
                    break;
                case ((3, 1) || (1, 3)):
                    result = "Rock beats Scissors";
    
                    if (playerSelection === 1) {
                        result = "You Win! " + result;
                    } else {
                        result = "You Lose! " + result;
                    }
                    
                    displayResult(computerSelection, playerSelection);
                    break;
            }
        } else {
            displayResult(computerSelection, playerSelection);
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