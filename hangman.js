function play() {
	var words = ['house', 'orange', 'biscuit', 'empire', 'america',
	 'demon', 'crocodile', 'human'];
	var underlines = [];
	var buttons = [];
	var lives = 0;
	var wordLengthCheck = 0;
	var info = 0;
	let choseRandom = 0;
	createAlphabet();
    createGuess(); 
    // Create alphabet 
    function createAlphabet() {
    	document.getElementById("playButton").disabled = true; 
    	lives = 5;
    	var letter;
    	for (var i = 97; i <= 122; ++i) {
	  		buttons[i] = document.createElement('button');
	  		letter = String.fromCharCode(i);
	  		buttons[i].innerHTML = letter;
	  		buttons[i].setAttribute("data-letter", letter);
	  		buttons[i].onclick = function(letter) {
	  			pickLetter(this.getAttribute("data-letter"))
	  		};
  			document.getElementById('alphabet').appendChild(buttons[i]);
  		}
  		info = document.getElementById('info');
		info.innerHTML = "GUESS THE WORD, YOU HAVE " + lives + " LIVES";
    }
    // Create the guess by choosing a random word from the list of words
  	function createGuess() {
  		var letter = 0;
		var unknownWord = 0;
		choseRandom = Math.floor((Math.random() * 8));
		wordLengthCheck = words[choseRandom].length;
		for (var i = 0, unknownWord = words[choseRandom]; i < 1; ++i) {
			for (var j = 0; j < unknownWord.length; ++j) {
				letter = unknownWord[j];
				underlines[j] = document.createElement('button');
				underlines[j].innerHTML = "_";
				underlines[j].setAttribute("data-letter", letter);
				document.getElementById("unknownWord").appendChild(underlines[j]);
			}
		}
	}
	// We pick a letter from the Alphabet and compare it with the unknown word
	// Then we show a text depending on 3 facts: 1- if we guess the letter; 2- if we don't
	// 3- if we lose the game, because of the amount of giving wrong answers
 	function pickLetter(letter) {
 		var indexLetter = letter.charCodeAt(letter);
 		buttons[indexLetter].setAttribute("disabled", "");
 		var found = 0;
		for (var i = 0; i < underlines.length; ++i) {
    	var guess = underlines[i].getAttribute("data-letter");
    		if (letter == guess) {
    			found = 1;
    			underlines[i].setAttribute("data-letter", letter);
    			underlines[i].innerHTML = letter;
    			--wordLengthCheck;
    		}
    	}
    	if (found == 0 && lives >= 1 && wordLengthCheck > 0) {
    		--lives;
			info = document.getElementById('info');
			info.innerHTML = "You did not guess, try again! " + lives + " lives left!";
				if (lives == 0) {
				info.innerHTML = "I'm sorry, but you LOSE! The word was: " + words[choseRandom];
				for (i = 97; i <= 122; ++i) {
					buttons[i].setAttribute("disabled", "");
				}
	    	}
    	}
    	else if (lives >= 1 && wordLengthCheck == 0) {
    		info = document.getElementById('info');
			info.innerHTML = "Congratulations! You WON!";
    	}
    	// After all we make a button to reset the game.
    	if (lives == 0 || wordLengthCheck == 0) {
    		var reset = document.createElement('button');
			reset.innerHTML = "RESET";
			document.getElementById('reset').appendChild(reset);
	  		reset.onclick = function() {
	  			for (i = 0; i <= 122; ++i) {
	  				if (i >= 0 && i < underlines.length) {
	  					underlines[i].parentNode.removeChild(underlines[i]);
	  				} 
	  				else if (i >= 97 && i <= 122) {
	  					buttons[i].parentNode.removeChild(buttons[i]);
	  				} 
	  			}
	  			reset.parentNode.removeChild(reset);
	  			play();
	  		}
    	}
  	}
}