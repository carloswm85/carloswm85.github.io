import Keys from './keys.js';

const keyApi = new Keys().testnetApiKey;
const keySecret = new Keys().testnetSecretKey;

console.log(keyApi);
console.log(keySecret);

const apiUrl = 'https://api.binance.com/api/v3/exchangeInfo?symbol=BTCUSDT';
const apiUrl2 = 'https://www.google.com';

fetch(apiUrl)
	.then(response => {
		if (response.ok) {
			let result = response.json();
			console.log('First then: ');			
			console.log(result);
			return result;
		}
	})
	.then(data => {
		// let stringyfied = JSON.stringify(data);
		console.log('Second then: ');		
		console.log(data);
		const stringyfied = JSON.stringify(data, null, "\t");
		const disp = document.getElementById('display');
		
		disp.innerText = stringyfied;
	})
	.catch(err => {
		console.log(err);		
	});
