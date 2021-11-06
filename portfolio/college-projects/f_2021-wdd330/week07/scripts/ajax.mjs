// READINGS & EXERCISES
/** ------------------------------------------------------------------------
* Title: Using Ajax technologies
---------------------------------------------------------------------------
JS: From Novice to Ninja, Ch13
*/

// This import and the case 1 fetch, are the most basic examples.
import fetch from "node-fetch";

// CASE 1
fetch('https://www.google.com/')
	.then(response => {
		console.log(
			`response case1: 
				- response → ${response}
				- response.ok → ${response.ok}
				- response.statusText → ${response.statusText}
				- response.headers → ${response.headers}
				- response.url → ${response.url}
				- response.redirected → ${response.redirected}
				- response.type → ${response.type}
				- response.text → ${response.text}
				- response.text() → ${response.text()}
				- response.blob(), for file responses → ${response.blob()}
				`);
	})
	.catch(error => {
		console.log(`Error → ${error}`);
	});

// CASE 2, this one will throw an error
const example2 = 'https://www.google-duck.com/';
fetch(example2)
	.then(response => {
		console.log(`response case2 → ${response}`);
	})
	.catch(error => {
		console.log(`error case2 → ${error}`);
	});

// CASE 3
const example3 = 'https://www.wikipedia.org/';
fetch(example3)
	.then(response => {
		if (response.ok) {
			return response;
		}
		// it could throw a custom error here
		throw Error('custom error case3');
	})
	.then(receivedResponse => {
		console.log(`receivedResponse case3 → ${receivedResponse}`);
		throw Error(receivedResponse.statusText);
	})
	.catch(error => {
		console.log(`error case3 → ${error}`);
	});

// CASE 4
// import fetch from "node-fetch";
const url4 = 'https://www.wikipedia.org/';
const newURL = 'https://www.google.com/';
fetch(url4)
	.then(response => response.redirect(newURL)) // redirects to another URL, response.redirect is not a supported function yet
	.then(response => console.log(`response newURL case4 → ${response}`))
	.catch(error => console.log('There was an error case4: ', error));


	
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Other examples
Promise.resolve().then(() => {
	console.log(Promise);	
	throw new Error('hey');
})
	.catch(e => {
		console.log(`custom error → ${e}`);
	});