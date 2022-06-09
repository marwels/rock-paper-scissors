const rock = 1;
const paper = 2;
const scissors = 3;

function computerPlay() {
    let comp = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // randomly returns either 1, 2 or 3;
    if (comp === 1) {
        return rock;
    } else if (comp === 2) {
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
    computerSelection = computerPlay();

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
    startGameButton.innerText = "Start New Game";

    const rockButton = document.createElement("button");
    rockButton.setAttribute("id", "rock");
    rockButton.addEventListener("click", function () {
        this.style.backgroundColor = "red";
        playRound(playerSelection = rock, computerSelection);
    })
    rockButton.innerText = "Rock";
    document.body.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.setAttribute("id", "paper");
    paperButton.addEventListener("click", function () {
        this.style.backgroundColor = "red";
        playRound(playerSelection = paper, computerSelection);
    })
    paperButton.innerText = "Paper";
    document.body.appendChild(paperButton);


    const scissorsButton = document.createElement("button");
    scissorsButton.setAttribute("id", "scissors");
    scissorsButton.addEventListener("click", function () {
        this.style.backgroundColor = "red";
        playRound(playerSelection = scissors, computerSelection);
    })
    scissorsButton.innerText = "Scissors";
    document.body.appendChild(scissorsButton);

    let score = 0;

    const rulesDiv = document.createElement("div");
    rulesDiv.setAttribute("id", "rules");
    document.body.appendChild(rulesDiv);
    scoreDiv.innerText = "It is a 5 round game";

    const scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("id", "score");
    document.body.appendChild(scoreDiv);
    scoreDiv.innerText = "Score: " + score;



    for (let i = 1; i <= 5; i++) {

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


const startGameButton = document.getElementById("start");
startGameButton.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    game();
})