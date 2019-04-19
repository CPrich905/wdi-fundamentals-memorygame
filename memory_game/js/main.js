console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[2];//ID cardOne as queen
cardsInPlay.push(cardOne);//adds cardOne to inPlay
console.log("User flipped " + cardsInPlay);


var cardTwo = cards[0];//ID cardTwo as king
cardsInPlay.push(cardTwo);//adds cardTwo to inPlay
console.log("User flipped " + cardsInPlay[1]);

// add logic to see if two cards have been played


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!")
	}
}

/*
var cardThree = cards[1];//ID cardThree as queen
var cardFour = cards[3];//ID cardFour as king
*/