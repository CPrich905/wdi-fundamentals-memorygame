document.addEventListener("DOMContentLoaded", function(event) {

console.log("Up and running!");

var cards = [
//create an object for each card containing name, suit, path to image
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png",
	},
];

var cardsInPlay = [];

var checkForMatch = function(cardId) {
	//checks cards match, prints result to console, not alert
	//update src to show card played
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			alert("You found a match!");
		} else {
			console.log("Sorry, try again!");
			alert("Sorry, try again.");
		}
	};
}

var flipCard = function () {
	//getAttribute to get data-id of card, save as cardID
	var cardId = this.getAttribute('data-id');
	//runs previous function to see if cards match.
	checkForMatch.bind(this)(cardId);
	//identify cards flipped & add to cardsInPlay
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards.rank);
	//log suit and image path to console
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
}

var createBoard = function () {
	//loop through each card in array
	for (var i = 0; i < cards.length; i++) {
		//for each card, create img element & store in var cardElement
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
//add event listener to invoke flipCard on 'click'
		cardElement.addEventListener('click', function() {
			flipCard();
			});
//add cardElement to game-board	
			document.getElementById('game-board').appendChild(cardElement);
	}
}


createBoard();
});