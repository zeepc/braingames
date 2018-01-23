// Store card types
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
//this.setAttribute('src',cards[cardId].cardImage);
//the setAttribute does NOT go above. cardId var declared
// in flipCard function
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

// Flipcards

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank + '!')
	this.setAttribute('src',cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();










