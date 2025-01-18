function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Please choose rock, paper, or scissors.');
    switch (humanChoice.toLowerCase()) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
        default:
            return 'Invalid input!';
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
    }

    if (humanScore > computerScore) {
        console.log('Human wins the game!');
    } 
    else if (humanScore < computerScore) {
        console.log('Computer wins the game!');
    } 
    else {
        console.log('It\'s a draw!');
    }
}

function playRound(humanChoice, computerChoice) {
    console.log('Human: ' + humanChoice);
    console.log('Computer: ' + computerChoice);
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore+=1;
            return 'You win! Rock beats scissors.';
        } else if (computerChoice === 'paper') {
            computerScore+=1;
            return 'You lose! Paper beats rock.';
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore+=1;
            return 'You win! Paper beats rock.';
        } else if (computerChoice === 'scissors') {
            computerScore+=1;
            return 'You lose! Scissors beats paper.';
        }
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            humanScore+=1;
            return 'You win! Scissors beats paper.';
        } else if (computerChoice === 'rock') {
            computerScore+=1;
            return 'You lose! Rock beats scissors.';
        }
        console.log('Human: ' + humanScore);
        console.log('Computer: ' + computerScore);
    }
}

playGame();