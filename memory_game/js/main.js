console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	//checks cards match, prints result to console, not alert
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again!")
		}
	}
}

function flipCard(cardId) {
	//identify cards flipped & add to cardsInPlay
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	//runs previous function to see if cards match.
	checkForMatch();
}
flipCard(0);
flipCard(2);
