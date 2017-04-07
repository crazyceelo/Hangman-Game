// Use key events to listen for the letters that your players will type.
/*
	DETAILS
	- Wins: (# of times user guessed the word correctly).
	- If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
	- As the user guesses the correct letters, reveal them: m a d o _ _ a.
	- Number of Guesses Remaining: (# of guesses remaining for the user).
	- Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
	- After the user wins/loses the game should automatically choose another word and make the user play it.-->

*/

// initial variables.
var wins = 0;
var answer = [];
var guessesLeft = 10;
var lettersAlreadyGuessed = [];

var winsEl = document.getElementById("wins");


// This selects the challenge to guess.
var words = ["word1", "word2", "word3", "word4", "word5", "word6",]
var setChallenge = Math.floor(Math.random()*words.length);
console.log(setChallenge);

// This grabs the elements ont he html page


function startGame() {
	winsEl.innerHTML = wins;
}


startGame();