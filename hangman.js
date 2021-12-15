function play() {

	var words = ['car', 'banana', 'apple', 'dracula', 'motorcycle',
	 'country', 'bite', 'vampire'];

	var underline = [];
	var buttons = [];
	var lives = 0;
	var wordCheck = 0;
	var info = 0;
	createAlphabet();
    createGuess();
    
    
    function createAlphabet() {
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
  	
  	function createGuess() {
  		var letterUnder = 0;
		var unknownWord = 0;
		let choseRandom = Math.floor((Math.random() * 8));
		wordCheck = words[choseRandom].length;
		for (var i = 0, unknownWord = words[choseRandom]; i < 1; ++i) {
			for (var j = 0; j < unknownWord.length; ++j) {
				letterUnder = unknownWord[j];
				underline[j] = document.createElement('button');
				underline[j].innerHTML = "_";
				underline[j].setAttribute("data-letter", letterUnder);
				document.getElementById("unknownWord").appendChild(underline[j]);
				
			}
		}
	}


 	function pickLetter(letter) {
 		var idxLetter = letter.charCodeAt(letter);
 		buttons[idxLetter].setAttribute("disabled", "");
 		
 		var found = 0;
		for (var i = 0; i < underline.length; ++i) {
    	var guess = underline[i].getAttribute("data-letter");
    		if (letter == guess) {
    			found = 1;
    			underline[i].setAttribute("data-letter", letter);
    			underline[i].innerHTML = letter;
    			--wordCheck;
    		}
    	}
    	if (found == 0 && lives >= 1 && wordCheck > 0) {
    		--lives;
			info = document.getElementById('info');
			info.innerHTML = "You did not guess, try again! " + lives + " lives left!";
    	}
    	if (lives == 0) {
    	 	info = document.getElementById('info');
			info.innerHTML = "I'm sorry, but you LOSE!";
			for (i = 97; i <= 122; ++i) {
				buttons[i].setAttribute("disabled", "");
			}
			var reset = document.createElement('button');
			reset.innerHTML = "RESET";
			document.getElementById('reset').appendChild(reset);
	  		reset.onclick = function() {
	  			for (i = 97; i <= 122; ++i) {
	  				buttons[i].parentNode.removeChild(buttons[i]);
	  			}
	  			for (i = 0; i < underline.length; ++i) {
	  				underline[i].parentNode.removeChild(underline[i]);
	  			}
	  			reset.parentNode.removeChild(reset);
	  			play();
	  		}
    	}
    	else if (lives >= 1 && wordCheck == 0) {
    		info = document.getElementById('info');
			info.innerHTML = "Congratulations! You WIN!";
			var reset = document.createElement('button');
			reset.innerHTML = "RESET";
			document.getElementById('reset').appendChild(reset);
	  		reset.onclick = function() {
	  			for (i = 97; i <= 122; ++i) {
	  				buttons[i].parentNode.removeChild(buttons[i]);
	  			}
	  			for (i = 0; i < underline.length; ++i) {
	  				underline[i].parentNode.removeChild(underline[i]);
	  			}
	  			reset.parentNode.removeChild(reset);
	  			play();
	  		}
    	}
  	}
}



