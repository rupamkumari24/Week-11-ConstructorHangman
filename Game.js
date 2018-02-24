// Game.js file will randomly select a word for the player.
// Using ES6 features

"use strict";

// Return a random word from the main answer choice game array
class Game {

	constructor(wordArray) {

		this.wordArray = wordArray;
	}

 	pickRandomWord() {

		return this.wordArray[Math.floor(Math.random() * this.wordArray.length + 1) - 1];
	}
}
module.exports = Game;