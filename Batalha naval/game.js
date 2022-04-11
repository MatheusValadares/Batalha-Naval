
let game = {

    cards: [],

    bombCards: [],
    
    shipsCards: [],

    nBombs: 30,

    nShips: 5,

    createCards: function() {

        this.cardsWithBomb();
        this.CardsWithShip();
    
        this.cards = this.shipsCards.concat(this.bombCards);
    
        this.shuffleCards(this.cards);
          
    },
    
    
    shuffleCards: function(cards) {
    
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex != 0) {
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
        }
    
    
    },
    
    
    
    cardsWithBomb: function() {
    
        let bombCard = {
            icon: "bomb",
        }
    
        while(this.bombCards.length < this.nBombs) {
            this.bombCards.push(bombCard);
        }
    
    },
    
    CardsWithShip: function() {
    
        let shipCard = {
            icon: "boat",
        }
    
        while(this.shipsCards.length < this.nShips) {
            this.shipsCards.push(shipCard);
        }
    
    },


    sunkenShips: null,

    score1: null,

    score2: null,

    playerTime: 1,

    choosePlayer: function() {

        if(this.playerTime === 1) {
            this.playerTime = 2;
        } else {
            this.playerTime = 1;
        }
    

    },

    playerWon: function() {
        if(this.score1 > this.score2) {
            return "jogador 1";
        }else {
            return "jogador 2";
        }
    },


    clearCards: function() {

        this.cards = [];

        this.bombsCards = [];
    
        this.shipsCards = [];

        this.sunkenShips = null;

        this.score1 = null;

        this.score2 = null;

        this.playerTime = 1;

    },



}

