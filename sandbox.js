let randomNumber = Math.floor(Math.random() * 5

function rollDice() {
    let diceImages = new Array (
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png",
    )
    document.getElementById('img1').setAttribute('src',diceImages[randomNumber])
}