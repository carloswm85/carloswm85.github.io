import Keys, { something } from './keys.js';
import { getJson, getText, listFiller } from './utilities.js';

const keys = new Keys();

const keyApi = keys.testnetApiKey;
const keySecret = keys.testnetSecretKey;
const keyAll = keys.getKeys(0);

const apiUrl = 'https://testnet.binance.vision/api/v3/depth?symbol=BTCUSDT'; // Testnet
// const apiUrl = 'https://api.binance.com/api/v3/exchangeInfo'; // The real deal
const apiUrl2 = 'https://www.google.com';

async function display() {
	const json = await getJson(apiUrl);
	const text = getText(json);

	const disp = document.getElementById('display');
	disp.innerText = text;
}

async function showList() {
	const text = await getJson(apiUrl);
}

display();