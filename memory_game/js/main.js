const cards = ["queen", "queen", "king", "king"];
const cardsInPlay= [];
function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match");
		}

		else if (cardsInPlay.length > 1 ) {
			console.log("Sorry, try again");
		}
		else {
			return;
		}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}	
	flipCard(0);
	flipCard(2);


	// let cardOne = cards[0];
	// cardsInPlay.push(cardOne);
	// console.log("User flipped " + cardsInPlay[0]);
	// let cardTwo = cards[2];
	// cardsInPlay.push(cardTwo);
	// console.log("User flipped " + cardsInPlay[1]);
