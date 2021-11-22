import Keys, { something } from './keys.js';

const keys = new Keys();

const keyApi = keys.testnetApiKey;
const keySecret = keys.testnetSecretKey;
const keyAll = keys.getKeys(0);

console.log(keyApi);
console.log(keySecret);
console.log(keyAll);
something();
console.log(keys.value);



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
