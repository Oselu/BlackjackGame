let player = {
    name: "Obinna",
    chips: 200
}

let cards= []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let topMessage = document.getElementById ("top-message")
let totalSum = document.getElementById ("total-sum")
let cardPicks = document.getElementById ("card-picks")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getArandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getArandomCard()
    let secondCard = getArandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    displayGame()
}

function displayGame() {
    cardPicks.innerHTML = "Your card picks are: "
for (let i = 0; i < cards.length; i++) {
    cardPicks.innerHTML += `<span class="card">${cards[i]}</span> `
}

    totalSum.textContent = "Their Sum is:" + sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
topMessage.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getArandomCard()
        sum += card
        cards.push(card)
        displayGame()        
    }
}


