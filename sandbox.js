let diceImages = new Array (
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
)

function rollDice1() {
    let randomNumber = Math.floor(Math.random() * diceImages.length)
    document.getElementById('img1').src = diceImages[randomNumber];
    return randomNumber
}

rollDice1()

function rollDice2() {
    let randomNumber = Math.floor(Math.random() * diceImages.length)
    document.getElementById('img2').src = diceImages[randomNumber];
    return randomNumber
}

rollDice2()

function whoWon() {
    if(rollDice1() > rollDice2()) {
        document.querySelector('h1').innerHTML = "Player 1 Won!";
    }else if(rollDice1() < rollDice2()) {
        document.querySelector('h1').innerHTML = "Player 2 Won!";
    }else if(rollDice1() == rollDice2()){
        document.querySelector('h1').innerHTML = "It's a Draw!"
    }
}

whoWon()