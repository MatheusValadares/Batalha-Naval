const CARD = "card";
const FLIP = "flip";
const BOMB = "bomb";
const BOAT = "boat";
const BACK = "card_back";
const FRONT = "card_front";

startGame();
changeColorPlayer();


function startGame() {
    game.createCards()

    initializeCards(game.cards);
}


function initializeCards(cards) {

    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";

    cards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add(CARD);
        createFaces(card, cardElement);

        cardElement.value = card.icon;
        cardElement.addEventListener('click', flipCard);

        gameBoard.appendChild(cardElement);

    });

}

function createFaces(card, cardElement) {
    createFacesElement(FRONT, card, cardElement);
    createFacesElement(BACK, card, cardElement);
}

function createFacesElement(face, card, element) {

    if (face === FRONT) {
        let cardFront = document.createElement("div");
        cardFront.classList.add(FRONT);
        cardFront.classList.add(card.icon);

        element.appendChild(cardFront);

    } else {
        let cardBack = document.createElement("div");
        cardBack.classList.add(BACK);

        element.appendChild(cardBack);

    }



}

function changeColorPlayer() {
    let playerColor1 = document.getElementById("square1");
    let playerColor2 = document.getElementById("square2");

    if(game.playerTime === 1) {
        playerColor2.classList.remove("playerColor");
        playerColor1.classList.add("playerColor");
    } else{
        playerColor1.classList.remove("playerColor");
        playerColor2.classList.add("playerColor");
    }
}



function flipCard() {
    this.classList.add("flip")

    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");

    if (game.playerTime === 1) {
        if (this.value === "boat") {
            game.sunkenShips++;
            game.score1++;
            score1.innerHTML = `NAVIOS AFUNDADOS: ${game.score1}`
        }
    } else {
        if (this.value === "boat") {
            game.sunkenShips++;
            game.score2++;
            score2.innerHTML = `NAVIOS AFUNDADOS: ${game.score2}`
        }
    }

    gameOverView();


    game.choosePlayer(this);
    changeColorPlayer();

}

function gameOverView() {

    if (game.sunkenShips === game.nShips) {

        setTimeout(() => {
            
            let gameOver = document.getElementById("gameOver");
            let sms = document.getElementById("msgGameOver");
            let winner = game.playerWon();
            sms.innerHTML = `Fim de jogo!<br>O ${winner} venceu!`
            gameOver.style.display = "flex";

        }, 1000);

    }

}




function restart() {
    game.clearCards();
    startGame();
    clearScore();
    let gameOver = document.getElementById("gameOver");
    gameOver.style.display = "none";
}

function clearScore() {
    let score1 = document.getElementById("score1");
    let score2 = document.getElementById("score2");

    score1.innerHTML = `NAVIOS AFUNDADOS: 0`
    score2.innerHTML = `NAVIOS AFUNDADOS: 0`

}
