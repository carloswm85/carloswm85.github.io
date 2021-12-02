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
const baseUrl = testnet;
const depth = `${baseUrl}${v3}/depth`;
const exchangeInfo = `${baseUrl}${v3}/exchangeInfo`;
const priceStatistics = `${baseUrl}${v3}/ticker/24hr`;
const allPrices = `${baseUrl}${v1}/ticker/allPrices`;


// Etc
let symbol = "?symbol=";
const btc = "BTCUSDT";

async function showList(url) {
	const data = await getJson(url);
	const symbolsList = document.getElementById('asset-selection_id');
	const symbolsArray = [];

	data.forEach(element => {
		const symbol = element.symbol;
		symbolsArray.push(symbol)
	})
	
	symbolsArray.sort();

	symbolsArray.forEach(element => {
		const symbol = element;
		const option = document.createElement('option');
		
		option.setAttribute('value', symbol);
		option.innerText = symbol;
		symbolsList.appendChild(option);
	});
}


// displayText();
const test = 'https://carloswm85.github.io/portfolio/college-projects/f_2021-wdd330/projects/project02_binance-orders/src/scripts/allPrices.json';
showList(allPrices);