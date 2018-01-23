// store card types
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},

{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},

{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},

{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
}

];
// Will show cards selected by player
var cardsInPlay = [];

// Function to check for matching cards
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

// Flipcards

var flipCard = function(cardID) {
	console.log('User flipped ' + cards[cardID].rank + '!')
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

}

flipCard(0);
flipCard(2);








