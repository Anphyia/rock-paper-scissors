'use strict';

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
        playerScore++;
        return `You win! ${playerChoice} beats ${computerSelection}`;
    } else {
         computerScore++;
        return `You lose! ${computerSelection} beats ${playerChoice}`;
    }
    
}

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function initializeGame() {
    const buttons = document.querySelectorAll("button");
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore >= maxScore || computerScore >= maxScore) return;
        
            const playerSelection = button.id;

            let result = playRound(playerSelection, getComputerChoice());
            resultDiv.textContent = result;
            scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

            if (playerScore >= maxScore) {
                resultDiv.textContent = `You won the game!`;
                resultDiv.classList.add("win-text"); 
            } else if (computerScore >= maxScore) {
                resultDiv.textContent = `You lost the game!`;
                resultDiv.classList.add("lost-text"); 
            } 

        });
    });
}

initializeGame();