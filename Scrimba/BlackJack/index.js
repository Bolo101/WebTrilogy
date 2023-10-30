let firstCard = 10;
let secondCard = 4;
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard ;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
//let sumEL = document.getElementById("sum-el");
//Can also use querySelector using its css selector (# for an id; . for a class)
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame();
}
function renderGame(){
    cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum : " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card ?";
    }
    else if (sum ===21) {
        message = "Blackjack !!";
        hasBlackjack = true;
    }
    else{
        message = "You lost !!";
        isAlive = false;
    }
    messageEL.textContent = message;
}

function newCard(){
    console.log("Drawing a new card from the deck!");
    let card = 5;
    sum += card;
    renderGame(); 
}
