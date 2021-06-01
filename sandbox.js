function rollDice1() {
    let randomNumber1 = Math.floor((Math.random() * 6) + 1)
    document.getElementById('img1').src = "images/dice" + randomNumber1 + ".png";
    return randomNumber1
}

function rollDice2() {
    let randomNumber2 = Math.floor((Math.random() * 6) + 1)
    document.getElementById('img2').src = "images/dice" + randomNumber2 + ".png"
    return randomNumber2
}

function whoWon(dice1, dice2) {
    dice1 = rollDice1();
    dice2 = rollDice2();
    if(dice1 > dice2) {
        document.querySelector('h1').innerHTML = "Player 1 Won!";
    }else if(dice1 < dice2) {
        document.querySelector('h1').innerHTML = "Player 2 Won!";
    }else if(dice1 == dice2){
        document.querySelector('h1').innerHTML = "It's a Draw!"
    }
    console.log("function fired", dice1, dice2)
}

