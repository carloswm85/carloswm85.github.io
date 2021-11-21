import fetch from "node-fetch";

// API key
const apiKey = 'AXN8AJmV5dx4bwIb2lDAIp55ThcxS39X4WanhBozt4kxREAgw677OLBtIlssofdG';

// Secret key
const secretKey = 'lJ1BXmZ0BRVMUa2UMTntKsfDSQMswFHQLeKkxCHC8BlNkeh5UJdh4l17ulPEe7Jh';

const apiUrl = 'https://api.binance.com/api/v3/exchangeInfo?symbol=BTCUSDT';
const apiUrl2 = 'https://www.google.com';

fetch(apiUrl)
	.then(response => {
		if (response.ok) {
			// let text = response.text();
			let json = response.json();
			return json;
		}
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);		
	});
