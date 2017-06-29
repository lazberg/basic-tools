// Use to make a textbox of words return as array-compatible text
// because I'm too lazy to put in all the names into my dnd randomizer.
function NamesToArray() {
	var inputText = document.getElementById('arrayInput').value;
	document.getElementById('arrayOutput').innerHTML = '[ "';
	for (var i = 0;i<inputText.length;i++) {
		var letter = inputText.charAt(i);
		if (letter == " ") {
			document.getElementById('arrayOutput').innerHTML += '", "';
		}
		else if (letter == ",") {
			document.getElementById('arrayOutput').innerHTML += "";
		}
		else {
			document.getElementById('arrayOutput').innerHTML += letter;
		}
	}
	document.getElementById('arrayOutput').innerHTML += '" ];';
}