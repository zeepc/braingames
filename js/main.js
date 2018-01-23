// store card types
var cards = ['queen','queen','king','king'];
// will show cards selected by player
var cardsInPlay = [];


// function to check for matching cards
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

// Function to flip cards

var flipCard = function(cardID) {

// How many  cards selected
if (cardsInPlay.length === 2) {
// Are the cards selected a match

  if  (cardsInPlay[0] === cardsInPlay[2]) {

		alert('You found a match!');
	}
else {

 alert('Sorry, try again!'); 

	} 

}

console.log('User flipped ' + cards[cardID] + '!')
cardsInPlay.push(cards[cardID]);
checkForMatch();
}

flipCard(0);
flipCard(2);







