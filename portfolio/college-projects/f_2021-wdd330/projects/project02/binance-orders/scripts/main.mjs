import fetch from "node-fetch";

// API key
const apiKey = 'AXN8AJmV5dx4bwIb2lDAIp55ThcxS39X4WanhBozt4kxREAgw677OLBtIlssofdG';

// Secret key
const secretKey = 'lJ1BXmZ0BRVMUa2UMTntKsfDSQMswFHQLeKkxCHC8BlNkeh5UJdh4l17ulPEe7Jh';

const apiUrl = 'https://api.binance.com';

// fetch(apiUrl)
// 	.then(response => {
// 		if (response.ok) {
// 			let json = response.json();
// 			return json;
// 		}
// 	})
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => {
// 		console.log(err);		
// 	});

// Example POST method implementation:
async function getData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url);
	return response.json(); // parses JSON response into native JavaScript objects
}

getData(apiUrl)
	.then(data => {
		console.log(data); // JSON data parsed by `data.json()` call
	});