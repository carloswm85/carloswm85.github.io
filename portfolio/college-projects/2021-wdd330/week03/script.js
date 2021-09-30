/**
 * LAST EDIT
 */
const lastEdit = document.querySelector(".last-edit");
const theDate = new Date(document.lastModified).toLocaleDateString();
lastEdit.innerText = theDate;

// READINGS & EXERCISES
/** ------------------------------------------------------------------------
 * JavaScript: Novice to Ninja
 --------------------------------------------------------------------------- */
// Chapter 5 - Objects

// Example: Object Literal
const superman = {
	name: 'Superman',
	'real name': 'Clark Kent',
	height: 75,
	weight: 235,
	hero: true,
	villain: false,
	allies: ['Batman', 'Aquaman', 'Wonder Woman'],
	fly() {
		return 'Up, up and away!';
	}
};

console.log('Hero is:');
console.log(superman);

// Display all object's properties
let count = 1;
for (const [key, value] of Object.entries(superman)) {
	if (superman.hasOwnProperty(key)) { // boolean check if it exists
		console.log(`${count++}) ${key}: ${value}`);
	}
}

superman.city = 'Metropolis'; // adding a totally new value property.
count = 0;
for (const [key, value] of Object.entries(superman)) {
	console.log(`${count++}) ${key}: ${value}`);
}

// Example: Symbol
const s1 = Symbol('Spiderman');
const s2 = Symbol('Spiderman');

console.log(s1);
console.log(s2);
console.log(s1 == s2);
console.log(s1 === s2);


// Example: this in OL (Object Literal)
const dice = {
	sides: 6,
	roll() {
		return Math.floor(this.sides * Math.random()) + 1;
	}
}
console.log(dice.roll());
console.log(dice.roll());
console.log(dice.roll());


/* Quiz Ninja Project */
// Ch5

// Question objects inside an array
const quiz = [{
		name: "Superman",
		realName: "Clark Kent"
	},
	{
		name: "Wonder Woman",
		realName: "Diana Prince"
	},
	{
		name: "Batman",
		realName: "Bruce Wayne"
	}
];

// namespace for functions
const game = {

	// function #1
	start(quiz) {
		this.questions = [...quiz];
		this.score = 0;

		// main game loop
		for (const question of this.questions) {
			this.question = question;
			this.ask();
		}

		// end of main game loop
		this.gameOver();
	},

	// function #2
	ask() {
		//
	},

	// function #3
	check(response) {
		//
	},

	// function #4
	gameOver() {
		//
	}
}