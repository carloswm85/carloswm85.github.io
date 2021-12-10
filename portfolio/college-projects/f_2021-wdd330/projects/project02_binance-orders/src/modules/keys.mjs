// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> My Keys
/**
 * TestNet: https://testnet.binance.vision/
 * TestNet reference: https://dev.binance.vision/t/binance-testnet-environments/99/22
 */
export default class Keys {

	constructor() {
		this.keys = [
			{
				server: 'binance',
				type: 'key',
				value: '123abc'
			},
			{
				server: 'binance',
				type: 'secret',
				value: '456def'
			},
			{
				server: 'testnet',
				type: 'key',
				value: 'sD1SVM9I1sHCHlRuZzQECzRjyAJECMWRq9kolCm6IfgszKGBbTX4WFlazHl3Fpv8'
			},
			{
				server: 'testnet',
				type: 'secret',
				value: '26CAJ4mI9iBO1nwT1o9NNARrdjipvZ6o4I7qkcW6celR09Nam0g3K2xmXIBkYAlp'
			},
		];
	}
	
	getKey(order = null, server = null, type = null) {
		return this.keys[order];
	}
}


export function something() {
	console.log('testing exported something() from key.js');
}