// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> My Keys
/**
 * TestNet: https: //testnet.binance.vision/
 * TestNet reference: https: //dev.binance.vision/t/binance-testnet-environments/99/22
 */
export default class Keys {

	value = 'Some value';

	constructor() {
		/** Binance - Name: wdd330 - This are non-testing broker keys*/
		// API key
		this.apiKey = 'someApiKey';
		// Secret key
		this.secretKey = 'someSecretKey';
		

		/** TestNet - Name: testnet */
		// Permissions: TRADE, USER_DATA, USER_STREAM, MARKET_DATA, SECURE_WEB_SOCKET
		// API key
		this.testnetApiKey = 'sD1SVM9I1sHCHlRuZzQECzRjyAJECMWRq9kolCm6IfgszKGBbTX4WFlazHl3Fpv8';
		// Secret key
		this.testnetSecretKey = '26CAJ4mI9iBO1nwT1o9NNARrdjipvZ6o4I7qkcW6celR09Nam0g3K2xmXIBkYAlp';	

		this.test = '';
	}
	
	getKeys(petition) {
		switch (petition) {
			case 0:
				let keys = `Keys:\n\tapikey: ${this.apiKey}\n\tsecretKey: ${this.secretKey}\n\ttestnetApiKey: ${this.testnetApiKey}\n\ttestnetSecretKey: ${this.testnetSecretKey}`;
				return keys;
			case 1:
				return this.apiKey;		
			case 2:
				return this.secretKey;
			case 3:
				return this.testnetApiKey;
			case 4:
				return this.testnetSecretKey;
			default:
				console.log('Something happened at Keys.getKeys()');				
				break;
		}
		return 0;
	}
}

export function something() {
	console.log('testing exported something()');
	
}