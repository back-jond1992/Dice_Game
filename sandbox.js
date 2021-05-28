let diceImages = new Array (
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
)

let randomDiceImage1 = Math.floor(Math.random() * diceImages.length)

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);

let randomDiceImage2 = Math.floor(Math.random() * diceImages.length)

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

if(image1 > image2) {
    document.querySelector('h1').innerHTML = "Player 1 Won!";
}else if(image1 < image2) {
    document.querySelector('h1').innerHTML = "Player 2 Won!";
}else{
    document.querySelector('h1').innerHTML = "It's a Draw!"
    }
