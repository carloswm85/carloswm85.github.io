export default class Client {

	constructor(apiKey, secretKey) {
		this.apiKey = apiKey;
		this.secretKey = secretKey;
	}
	
	getKeys() {
		console.log(this.apiKey);
		console.log(this.secretKey);	
		
		return `Api: ${this.apiKey}\nSecret: ${this.secretKey}`;
	}
	
	getListeningKey() {
		console.log('getListeningKey()');
		// https://testnet.binance.vision.com/api/v3/userDataStream/rWAScoU07dmuE8QOwYBux8bVCHfkUUCMK6FLl7T2g610MLyoj80gD2J4culq
	}
}
