// API key
// const apiKey = 'Qeik4zia54oPl8TbVVqSZZjbSQZn3yFf5f4fqShKaKaZtTBnhQxVssf0SGhbP2jg';

// Secret key
// const secretKey = 'JGy1UEMqCoyg3EH32TlkvbEp7ARXvQ2xYkgdpZC5rRDNz62f35d3Su0fEnO90pD4';

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
