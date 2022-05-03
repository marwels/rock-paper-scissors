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
        console.log("It's a tie!");
        return 0;
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("You Lose! Paper beats Rock");
        return 0;
    } else if (playerSelection === 1 && computerSelection === 3) {
        console.log("You Win! Rock beats Scissors");
        return 1;
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log("You Win! Paper beats Rock");
        return 1;
    } else if (playerSelection === 2 && computerSelection === 3) {
        console.log("You Lose! Scissors beats Paper");
        return 0;
    } else if (playerSelection === 3 && computerSelection === 1) {
        console.log("You Lose! Rock beats Scissors");
        return 0;
    } else if (playerSelection === 3 && computerSelection === 2) {
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

