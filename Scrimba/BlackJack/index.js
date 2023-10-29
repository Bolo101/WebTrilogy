let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard + 6;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
function startGame(){
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
