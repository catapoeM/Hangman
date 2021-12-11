
function play() {
	alert("merge");
	var words = ['car', 'banana', 'apple', 'dracula', 'motorcycle', 'country', 'bite', 'vampire'];

	// We create the alphabetical buttons
	var p, letter, button, holder;
	holder = document.getElementById( "alphabet" );
	// Create alphabet
	for ( var i = 97; i <= 122; ++i ) {
		if ( i == 97) {
			p = document.createElement( "p" );
		}
		// Every number is transformed in letters
		letter = String.fromCharCode( i );
		// Every button is created
		button = document.createElement( "button" );
		// On every button is written a letter
		button.innerHTML = letter;
		button.setAttribute( "data-letter", letter );
		button.onclick = function( sendLetter ) {
		 	pickLetter( this.getAttribute( "data-letter" ) );
		 	getButton( this.getAttribute(button));
		};
		p.appendChild( button );
		if ( i == 106 ) {
		    holder.appendChild( p );
		    
		}
	}
	
	function pickLetter(letter) {
		alert(letter);
		
	}

	underlineHolder = document.getElementById( "wordToGuess" );
	var c, letterWord, buttonLetter; 
	p = document.createElement( "p" );
	let choseRandom = Math.floor((Math.random() * 9) + 1);
	for (var i = 0, wordToGuess = words[choseRandom]; i < 1; ++i) {
		for (var j = 0; j < wordToGuess.length; ++j) {
			//alert(wordToGuess[j]);
			//alert(wordToGuess[j].charCodeAt(0));
		}
	}

}

