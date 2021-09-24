/* Novice to Ninja, Ch2*/
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

// Quiz Ninja Project
console.log('\n>> Quiz Ninja Project');
const question = "What is Superman's real name?\n(You can read the code for this in the JS file)"
const answer = prompt(question);
alert(`You answered ${answer}`);