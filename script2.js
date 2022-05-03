function computerPlay() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // randomly returns either 1, 2 or 3
    //1 rock
    //2 paper
    //3 scissors
}
let computerSelection = computerPlay();

//function randomIntFromInterval(min, max) { // min and max included 
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}
//const rndInt = randomIntFromInterval(1, 6)
//console.log(rndInt)

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK") {
        playerSelection = 1;
    } else if (playerSelection === "PAPER") {
        playerSelection = 2;
    } else if (playerSelection === "SCISSORS") {
        playerSelection = 3;
    } else {
        console.log("Sorry, you've made a spelling mistake. Try again!");
    }


    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 1 && computerSelection === 2) {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 1 && computerSelection === 3) {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 2 && computerSelection === 1) {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 2 && computerSelection === 3) {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 3 && computerSelection === 1) {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === 3 && computerSelection === 2) {
        return "You Win! Scissors beats Paper";
    } else { return "You have to choose 'Rock', 'Paper' or 'Scissors'" }
}



