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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore !== 5 && computerScore !== 5) { 
        let playerSelection = prompt("First to 5 wins!", "");
        let result = playRound(playerSelection, getComputerChoice());
        if (result.includes("win")) {
            playerScore++;
        } 
        else if (result.includes("lose")) {
            computerScore++;
        } 
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log(`You won the game! \nPlayer: ${playerScore} Computer: ${computerScore}`);
    } else {
        console.log(`You lost the game! \nPlayer: ${playerScore} Computer: ${computerScore}`);
    }
}
