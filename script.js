function getComputerChoice() {
    let shoot = Math.floor(Math.random() * 3);

    switch (shoot) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase(); 
    
    if (playerChoice === computerSelection) {
        return "It's a tie!";
    }
    else if (
        (playerChoice === "rock" && computerSelection === "scissors") ||
        (playerChoice === "paper" && computerSelection === "rock") ||
        (playerChoice === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerChoice} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerChoice}`;
    }
    
}


