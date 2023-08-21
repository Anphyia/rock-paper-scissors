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



