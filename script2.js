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

}

