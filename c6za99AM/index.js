let player = { //OBJECT
    name: "Cristian", //KEY VALUE PAIRS
    chips: 145 //KEY VALUE PAIRS
}
let cards = [] //ARRAY
let sum = 0 //NUMBER
let hasBlackJack = false //BOOLEAN
let isAlive = false //BOOOLEAN
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() { 
    let randomNumber = Math.floor( Math.random()*13 ) + 1 //MATH OBJECTS
    if (randomNumber > 10) { //IF ELSE STATEMENTS
        return 10 //RETURN VALUES
    } else if (randomNumber === 1) { //IF ELSE STATEMENTS
        return 11 //RETURN VALUES
    } else { //IF ELSE STATEMENTS
        return randomNumber //IF ELSE STATEMENTS
    }
}

function startGame() {
    isAlive = true //BOOLEAN
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // REASIGNED ARRAY
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) { //FOR LOOP
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) { //IF ELSE STATEMENTS/COMPARISON OPERATOR
        message = "Do you want to draw a new card?" //IF ELSE STATEMENTS
    } else if (sum === 21) { //IF ELSE STATEMENTS/COMPARISON OPERATOR
        message = "You've got Blackjack!" //IF ELSE STATEMENTS
        hasBlackJack = true //BOOLEAN
    } else { //IF ELSE STATEMENTS
        message = "You're out of the game!" //IF ELSE STATEMENTS
        isAlive = false //BOOLEAN
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) { //IF ELSE STATEMENTS/LOGICAL OPERATOR
        let card = getRandomCard()
        sum += card
        cards.push(card) //PUSHED TO ARRAY
        renderGame()        
    }
}



    