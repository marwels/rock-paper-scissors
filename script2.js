const rock = 1;
const paper = 2;
const scissors = 3;
let count = 0;
let score = 0;

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
    count++;


    if (count === 5) {
        let buttonsToRemoveAfterGame = document.querySelectorAll("button.answer");
        buttonsToRemoveAfterGame.forEach(button => {
            button.remove();
        })
        information.innerText = "It was last round!";
        score = 0;
    }



    if (playerSelection === computerSelection) {
        information2.innerText = "It's a tie!";
        return;
    } else if (playerSelection === rock && computerSelection === paper) {
        information2.innerText = "You Lose! Paper beats Rock";
        return;
    } else if (playerSelection === rock && computerSelection === scissors) {
        information2.innerText = "You Win! Rock beats Scissors";
        score++;
        scoreDiv.innerText = "Total score: " + score + " points";
        return;
    } else if (playerSelection === paper && computerSelection === rock) {
        information2.innerText = "You Win! Paper beats Rock";
        score++;
        scoreDiv.innerText = "Total score: " + score + " points";
        return;
    } else if (playerSelection === paper && computerSelection === scissors) {
        information2.innerText = "You Lose! Scissors beats Paper";
        return;
    } else if (playerSelection === scissors && computerSelection === rock) {
        information2.innerText = "You Lose! Rock beats Scissors";
        return;
    } else if (playerSelection === scissors && computerSelection === paper) {
        information2.innerText = "You Win! Scissors beats Paper";
        score++;
        scoreDiv.innerText = "Total score: " + score + " points";
        return;
    } else {
        information2.innerText = "You have to choose 'Rock', 'Paper' or 'Scissors'";
        return;
    }

}


function game() {
    startGameButton.innerText = "Start New Game";
    startGameButton.classList.add("startNewGame");

    let h1ToDelete = document.querySelector("h1");
    h1ToDelete.remove();

    count = 0;
    let divsToDelete = document.querySelectorAll("div.information");
    divsToDelete.forEach(div => {
        div.remove();
    });

    let buttonsToRemoveAfterGame = document.querySelectorAll("button.answer");
    buttonsToRemoveAfterGame.forEach(button => {
        button.remove();
    })

    document.body.appendChild(information);

    const rockButton = document.createElement("button");
    rockButton.setAttribute("id", "rock");
    rockButton.classList.add("answer");
    rockButton.addEventListener("click", function () {
        playRound(playerSelection = rock, computerSelection);
    })
    //ja to ładniej zapisac?
    rockButton.innerText = "Rock";
    document.body.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.setAttribute("id", "paper");
    paperButton.classList.add("answer");
    paperButton.addEventListener("click", function () {
        playRound(playerSelection = paper, computerSelection);
    })
    paperButton.innerText = "Paper";
    document.body.appendChild(paperButton);


    const scissorsButton = document.createElement("button");
    scissorsButton.setAttribute("id", "scissors");
    scissorsButton.classList.add("answer");
    scissorsButton.addEventListener("click", function () {
        playRound(playerSelection = scissors, computerSelection);
    })
    scissorsButton.innerText = "Scissors";
    document.body.appendChild(scissorsButton);

    document.body.appendChild(information2);
    document.body.appendChild(scoreDiv);
}

const startGameButton = document.getElementById("start");
startGameButton.addEventListener("click", game);



const information = document.createElement("div");
information.classList.add("information");
information.innerText = "It is a 5 round game";


const information2 = document.createElement("div");
information2.classList.add("information");

const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");
scoreDiv.innerText = "Total score: " + score + " points";

