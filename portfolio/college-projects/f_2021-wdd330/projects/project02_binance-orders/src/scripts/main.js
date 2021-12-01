import Keys, { something } from './keys.js';
import { getJson, getText, listFiller } from './utilities.js';

const keys = new Keys();

const keyApi = keys.testnetApiKey;
const keySecret = keys.testnetSecretKey;
const keyAll = keys.getKeys(0);

const baseUrl = 'https://api.binance.com/api/v3';
const testNet = 'https://testnet.binance.vision/api/v3';
const url1 = testNet + '/depth?symbol=BTCUSDT';
const url2 = testNet + '/exchangeInfo';
console.log(url2);

async function displayText() {
	const json = await getJson(url1);
	const text = getText(json);

	const disp = document.getElementById('display');
	disp.innerText = text;
}

async function showList() {
	const data = await getJson(url2);
	const listaSelect = document.getElementById('asset_id')
	const arraySymbols = data.symbols;
	console.log(data);

	arraySymbols.forEach(element => {
		const symbol = element.symbol;
		const option = document.createElement('option');
		option.setAttribute('value', symbol.toLowerCase());
		option.innerText = symbol;
		listaSelect.appendChild(option);
	});

	console.log(arraySymbols[19]);
}


// displayText();
showList();