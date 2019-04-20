console.log("Up and running!");

var cards = [

//create an object for each card containing name, suit, path to image
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png',
},];

var cardsInPlay = [];

function checkForMatch() {
	//checks cards match, prints result to console, not alert
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

function flipCard(cardId) {
	//identify cards flipped & add to cardsInPlay
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	//log suit and image path to console
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	//runs previous function to see if cards match.
	checkForMatch();
}
flipCard(0);
flipCard(2);


//update code to access values from specific card object