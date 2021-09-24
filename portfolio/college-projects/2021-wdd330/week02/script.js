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
const romanNumbers = new Map();
romanNumbers.set(1, 'I').set(2, 'II').set(3, 'III');
console.log(romanNumbers); // When printed, the arrow → is called "hash rocket".

/* Quiz Ninja Project */
// Ch2
console.log('\n>> Quiz Ninja Project');
const question = "What is Superman's real name?\n(You can read the code for this in the JS file)"
const answer = prompt(question);
alert(`You answered ${answer}`);

// Ch3
const quiz = [
	["What's Superman real name?", "Clark Kent"],
	["What is Wonder Woman's real name?", "Diana Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
];
let score = 0;

for (const [question, answer] of quiz) {
	const response = prompt(question);

	if (response === answer) {
		alert('Correct!');
		score++;
	} else {
		alert(`Wrong! The correct answer was ${answer}`);
	}
}

alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);