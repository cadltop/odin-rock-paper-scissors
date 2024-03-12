function playGame() {

    function displayResult(computerSelection, playerSelection) {
        const resultsDiv = document.querySelector('.results');
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-r');
        const computerDiv = document.createElement('div');
        computerDiv.classList.add('computer-r');

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
                    document.querySelector('.player-r').innerHTML = 'Rock';
                    break;
                case 2:
                    document.querySelector('.player-r').innerHTML = 'Paper';
                    break;
                case 3:
                    document.querySelector('.player-r').innerHTML = 'Scissors';
                    break;
            }
    
            switch (computerSelection) {
                case 1:
                    document.querySelector('.computer-r').innerHTML = 'Rock';
                    break;
                case 2:
                    document.querySelector('.computer-r').innerHTML = 'Paper';
                    break;
                case 3:
                    document.querySelector('.computer-r').innerHTML = 'Scissors';
                    break;
            }
        }
    }

    let playerCounter = 0, computerCounter = 0;
    function scoreCounter(userWon) {
        const scoreDiv = document.querySelector('.score');
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-s');
        const computerDiv = document.createElement('div');
        computerDiv.classList.add('computer-s');

        if (document.querySelector('.score-txt').nextElementSibling === null) {
            switch (userWon) {
                case true:
                    playerCounter += 1;
                    break;
                case false:
                    computerCounter += 1;
                    break;
                case null:
                    playerCounter += 1;
                    computerCounter += 1;
                    break;
            }

            computerDiv.textContent = computerCounter.toString();
            playerDiv.textContent = playerCounter.toString();
            scoreDiv.appendChild(computerDiv);
            scoreDiv.appendChild(playerDiv);
        } else {
            switch (userWon) {
                case true:
                    playerCounter += 1;
                    break;
                case false:
                    computerCounter += 1;
                    break;
                case null:
                    playerCounter += 1;
                    computerCounter += 1;
                    break;
            }
        
            document.querySelector('.computer-s').innerHTML = computerCounter.toString();
            document.querySelector('.player-s').innerHTML = playerCounter.toString();
            const messageP = document.querySelector('.message');

            messageP.textContent = '';
            
            if (playerCounter === 5) {
                document.querySelector('.message').innerHTML = 'You Won!';
                playerCounter = 0; computerCounter = 0;
            }
            if (computerCounter === 5) {
                document.querySelector('.message').innerHTML = 'You Loss!';
                playerCounter = 0; computerCounter = 0;
            }
            if (playerCounter === 5 && computerCounter == 5) {
                document.querySelector('.message').innerHTML = "It's a tie!";
                playerCounter = 0; computerCounter = 0;
            }
            
        }
    }
    

    function playRound(computerSelection, playerSelection) {
        displayResult(computerSelection, playerSelection);

        if (computerSelection !== playerSelection) {
            console.log(playerSelection);
            console.log(computerSelection);
            switch (computerSelection, playerSelection) {
                case ((1, 2) || (2, 1)):
                    if (playerSelection === 2) {
                        scoreCounter(true);
                    } else {
                        scoreCounter(false);
                    }
                    break;

                case ((2, 3) || (3, 2)):
                    if (playerSelection === 3) {
                        scoreCounter(true);
                    } else {
                        scoreCounter(false);
                    }
                    break;

                case ((3, 1) || (1, 3)):
                    if (playerSelection === 1) {
                        scoreCounter(true);
                    } else {
                        scoreCounter(false);
                    }
                    break;
            }
        } else {
            scoreCounter(null);
        }
    }

    const rockBtn = document.querySelector('.rock-btn');
    const paperBtn = document.querySelector('.paper-btn');
    const scissorsBtn = document.querySelector('.scissors-btn');

    rockBtn.addEventListener('click', () => {
        let computerSelection = Math.round(Math.random() * 3) + 1;
        if (computerSelection > 3) {
            computerSelection = Math.round(computerSelection - 1);
        }
        const playerSelection = 1;
        playRound(computerSelection, playerSelection);
    });

    paperBtn.addEventListener('click', () => {
        let computerSelection = Math.round(Math.random() * 3) + 1;
        if (computerSelection > 3) {
            computerSelection = Math.round(computerSelection - 1);
        }
        const playerSelection = 2;
        playRound(computerSelection, playerSelection);
    });

    scissorsBtn.addEventListener('click', () => {
        let computerSelection = Math.round(Math.random() * 3) + 1;
        if (computerSelection > 3) {
            computerSelection = Math.round(computerSelection - 1);
        }
        const playerSelection = 3;
        playRound(computerSelection, playerSelection);
    });

}

playGame();