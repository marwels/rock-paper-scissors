function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
// randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! Scissors beats Paper";
    } else { return "You have to choose 'Rock', 'Paper' or 'Scissors'" }
}

function game() {
    let score = 0;
    const computerSelection = computerPlay();
    let playerSelection = prompt("Tipe your choice: rock, paper or scissors", "");
    let gameResult = playRound(playerSelection, computerSelection);

    if (gameResult === "It's a tie!") {
        console.log(gameResult);
        console.log("You get 0 points.");
        console.log("Totoal: " + score + " points");
    } else if (gameResult === "You Lose! Paper beats Rock" ||
        gameResult === "You Lose! Scissors beats Paper" || gameResult === "You Lose! Rock beats Scissors" ||
        gameResult === "You Lose! Paper beats Rock") {
        console.log(gameResult);
        console.log("You get 0 points.");
        console.log("Totoal: " + score + " points");
    } else if (gameResult === "You Win! Rock beats Scissors" || gameResult === "You Win! Paper beats Rock" ||
        gameResult === "You Win! Scissors beats Paper") {
        console.log("You get 1 point.");
        console.log(gameResult);
        score++;
        console.log("Totoal: " + score + " points");
    } else {
        console.log("Sorry, something is wrong");
    }


}
