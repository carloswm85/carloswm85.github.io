console.log("test" [2]);

function countChar(word, letter = 'b') {
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i] == letter)
			count++;
	}
	return count;
}
console.log(countChar('This Bibiana banana string has two lowercase Bs'));
console.log(countChar("BBC"));
console.log(countChar("kakkerlak", "k"));