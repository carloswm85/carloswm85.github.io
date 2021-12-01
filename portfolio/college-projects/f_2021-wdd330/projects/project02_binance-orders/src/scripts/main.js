import Keys, { something } from './keys.js';
import { getJson, getText, listFiller } from './utilities.js';

const keys = new Keys();

const keyApi = keys.testnetApiKey;
const keySecret = keys.testnetSecretKey;
const keyAll = keys.getKeys(0);

// Base URL
const binance = 'https://api.binance.com/api';
const testnet = 'https://testnet.binance.vision/api';
const v1 = '/v1';
const v2 = '/v2';
const v3 = '/v3';

// Endpoints
const depth = testnet + v3 + '/depth';
const exchangeInfo = testnet + v3 + '/exchangeInfo';
const priceStatistics = testnet + v3 + "/ticker/24hr";
const allPrices = testnet + v1 + '/ticker/allPrices';

// Etc
let symbol = "?symbol=";
const btc = "BTCUSDT";

async function showList(url) {
	const data = await getJson(url);
	const listaSelect = document.getElementById('asset-selection_id');
	console.log('Show List:');
	console.log(data);

	data.forEach(element => {
		const symbol = element.symbol;
		const option = document.createElement('option');
		
		option.setAttribute('value', symbol);
		option.innerText = symbol;
		listaSelect.appendChild(option);
	});
}


// displayText();
const test = '';
showList(test);