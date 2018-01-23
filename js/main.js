// store card types
var cards = ['queen','queen','king','king'];
// will show cards selected by player
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

// cards currently selected by user

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

// Are selected cards a match?
if (cardsInPlay.length === 2) {
// Are the cards selected a match?

  if  (cardsInPlay[0] === cardsInPlay[2]) {

		alert("You found a match!");
	}
else {

 alert("Sorry, try again!"); 

	}

}

/*

console.log("User flipped " + cardsInPlay);
*/