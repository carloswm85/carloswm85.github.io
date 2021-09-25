/**
 * LAST EDIT
 */
const lastEdit = document.querySelector(".last-edit");
const theDate = new Date(document.lastModified).toLocaleDateString();
lastEdit.innerText = theDate;


/**
 * Novice to Ninja
 */

// Ch2
// Infinity
console.log('>>> Novice to Ninja, Ch2');
console.log('\n>> Infinity');
const num = 12.2;
const num1 = 1e308;
const num2 = 1e309;
const num3 = 1 / 0;
console.log(`num value: ${num}; typeof ${ typeof (num) }`);
console.log(`num1 value: ${num1}; typeof ${ typeof (num1) }`);
console.log(`num2 value: ${num2}; typeof ${ typeof (num2) }`);
console.log(`num3 value: ${num3}; typeof ${ typeof (num3) }`);

// Ch3
// Maps
console.log('>>> Novice to Ninja, Ch3');
console.log('\n>> Maps');
const romanNumbers = new Map();
romanNumbers.set(1, 'I').set(2, 'II').set(3, 'III');
console.log(romanNumbers); // When printed, the arrow → is called "hash rocket".

// Ch4: Functions
console.log('>>> Novice to Ninja, Ch4');
// arguments: It is an object.
console.log('\n>> arguments()');

function arguments() {
	console.log(typeof (arguments));
	return arguments;
}
const result = arguments('hello', NaN);
console.log(typeof (result));
console.log(result);

// rest: It is an actual array
console.log('\n>> rest(... args)');

function rest(...args) {
	console.log(typeof (args));
	return args;
}
const result2 = rest(1, 2, 3, 4);
console.log(typeof (result2));
console.log(result2);



/* Quiz Ninja Project */
// Ch2
console.log('\n>> Quiz Ninja Project');
const question = "(TEST) What is Superman's real name?\n(You can read the code for this in the raw JS file link)"
const answer = prompt(question);
alert(`(TEST) You answered ${answer}`);

// Ch3
const quiz = [
	["(Game 1) What's Superman real name?", "Clark Kent (Game 1) "],
	["(Game 1) What is Wonder Woman's real name?", "Diana Prince (Game 1) "],
	["(Game 1) What is Batman's real name?", "Bruce Wayne (Game 1) "]
];
let score = 0;

for (const [question, answer] of quiz) {
	const response = prompt(question);

	if (response === answer) {
		alert('(Game 1) Correct!');
		score++;
	} else {
		alert(`(Game 1) Wrong! The correct answer was ${answer}`);
	}
}

alert(`(Game 1) Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

// Ch4
const quiz23 = [
	["(Game 2) What is Superman's real name?", "Clark Kent (Game 2)"],
	["(Game 2) What is Wonder Woman's real name?", "Diana Prince (Game 2)"],
	["(Game 2) What is Batman's real name?", "Bruce Wayne (Game 2)"]
];

function startGame2(quiz) {
	let score = 0;
	// main game loop
	for (const [question, answer] of quiz) {
		const response = ask(question);
		check(response, answer);
	} // end of main game loop
	gameOver();
	
	// function declarations
	function ask(question) {
		return prompt(question);
	}

	function check(response, answer) {
		if (response === answer) {
			alert('(Game 2) Correct!');
			score++;
		} else {
			alert(`(Game 2) Wrong! The correct answer was ${answer}`);
		}
	}

	function gameOver() {
		alert(`(Game 2) Game Over, you scored ${score} point${score !== 1 ?'s' : ''}`);
	}
}

startGame2(quiz23);