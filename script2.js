const rock = 1;
const paper = 2;
const scissors = 3;

function computerPlay() {
    let comp = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // randomly returns either 1, 2 or 3;
    if (comp = 1) {
        return rock;
    } else if (comp = 2) {
        return paper;
    } else { return scissors; }
}

let computerSelection = computerPlay();


//function randomIntFromInterval(min, max) { // min and max included 
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}
//const rndInt = randomIntFromInterval(1, 6)
//console.log(rndInt)

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Tipe your choice: rock, paper or scissors", "");
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerPlay();

    if (playerSelection === "ROCK") {
        playerSelection = rock;
    } else if (playerSelection === "PAPER") {
        playerSelection = paper;
    } else if (playerSelection === "SCISSORS") {
        playerSelection = scissors;
    } else {
        console.log("Sorry, you've made a spelling mistake. Try again!");
    }
    // console.log("playerSelection = " + playerSelection);
    // console.log("computerSelection = " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 0;
    } else if (playerSelection === rock && computerSelection === paper) {
        console.log("You Lose! Paper beats Rock");
        return 0;
    } else if (playerSelection === rock && computerSelection === scissors) {
        console.log("You Win! Rock beats Scissors");
        return 1;
    } else if (playerSelection === paper && computerSelection === rock) {
        console.log("You Win! Paper beats Rock");
        return 1;
    } else if (playerSelection === paper && computerSelection === scissors) {
        console.log("You Lose! Scissors beats Paper");
        return 0;
    } else if (playerSelection === scissors && computerSelection === rock) {
        console.log("You Lose! Rock beats Scissors");
        return 0;
    } else if (playerSelection === scissors && computerSelection === paper) {
        console.log("You Win! Scissors beats Paper");
        return 1;
    } else {
        console.log("You have to choose 'Rock', 'Paper' or 'Scissors'");
        return 0
    }
}


function game() {
    let score = 0;
    console.log("It is a 5 round game")
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Tipe your choice: rock, paper or scissors", "");
        let gameResult = playRound(playerSelection, computerSelection);

        if (gameResult === 0) {
            console.log("You get 0 points.");
            console.log("Totoal: " + score + " points");
        } else if (gameResult === 1) {
            console.log("You get 1 point.");
            score++;
            console.log("Totoal: " + score + " points");
        } else {
            console.log("Sorry, something is wrong");
        }


    }
}

