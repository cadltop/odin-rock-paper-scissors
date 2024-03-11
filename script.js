function playGame() {

    function displayResult(computerSelection, playerSelection) {
        const resultsDiv = document.querySelector('.results');
        const playerDiv = document.createElement('div');
        const computerDiv = document.createElement('div');

        switch (computerSelection) {
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

        switch (playerSelection) {
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
    }
    
    function playRound(computerSelection, playerSelection) {
        let result = null;
        const resultsDiv = document.querySelector('.results');
        const messageResult = document.createElement('p');

        messageResult.classList.add('message');

        if (computerSelection !== playerSelection) {
            switch (computerSelection, playerSelection) {
                case ((1, 2) || (2, 1)):
                    result = "Paper beats Rock";
    
                    if (playerSelection === 2) {
                        result = "You Win! " + result;
                    } else {
                        result = "You Lose! " + result;
                    }
                    messageResult.textContent = result;
                    displayResult(computerSelection, playerSelection);
                    break;
                case ((2, 3) || (3, 2)):
                    result = "Scissors beats Paper"
    
                    if (playerSelection === 3) {
                        result = "You Win! " + result;
                    } else {
                        result = "You Lose! " + result;
                    }
                    messageResult.textContent = result;
                    displayResult(computerSelection, playerSelection);
                    break;
                case ((3, 1) || (1, 3)):
                    result = "Rock beats Scissors";
    
                    if (playerSelection === 1) {
                        result = "You Win! " + result;
                    } else {
                        result = "You Lose! " + result;
                    }
                    messageResult.textContent = result;
                    displayResult(computerSelection, playerSelection);
                    break;
            }
        } else {
            messageResult.textContent = "It's a tie!"
            displayResult(computerSelection, playerSelection);
        }
        resultsDiv.appendChild(messageResult);
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