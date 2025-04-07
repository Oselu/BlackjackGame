let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let topMessage = document.getElementById ("top-message")
let totalSum = document.getElementById ("total-sum")
let cardPicks = document.getElementById ("card-picks")

function  startGame (){
    cardPicks.textContent = "Your card picks are:" + firstCard + " " + "and" + " "  + secondCard
    totalSum.textContent = "Their Sum is =" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    topMessage.textContent = message
}

