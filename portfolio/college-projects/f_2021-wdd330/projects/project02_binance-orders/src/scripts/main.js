import Keys, {
	something
} from './keys.js';
import {
	getJson,
	getText,
	listFiller
} from './utilities.js';

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
const klines = `${baseUrl}${v3}/klines?symbol=BTCUSDT&interval=1m`
const allPrices = `${baseUrl}${v1}/ticker/allPrices`;

// Etc
let symbol = "?symbol=";
const btc = "BTCUSDT";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LIST
// 1
async function showLists(url) {
	const data = await getJson(url);
	const symbolsListTrade = document.getElementById('asset_selection_id');
	const symbolsListChart = document.getElementById('asset_selection_chart_id');
	const symbolsArray = [];

	data.forEach(element => {
		const symbol = element.symbol;
		symbolsArray.push(symbol)
	})

	symbolsArray.sort();

	symbolsArray.forEach(element => {
		const symbol = element;
		const optionTrade = document.createElement('option');
		const optionChart = document.createElement('option');

		optionTrade.setAttribute('value', symbol);
		optionTrade.innerText = symbol;

		optionChart.setAttribute('value', symbol);
		optionChart.innerText = symbol;
		
		symbolsListChart.appendChild(optionChart);
		symbolsListTrade.appendChild(optionTrade);
	});
}

// 2
function getUrl(assetName) {
	// const timeframe = '1m';
	const assetNameLowered = assetName.toLowerCase();
	// const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@kline_${timeframe}`;
	const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@ticker`;
	return url;
}

// 3
async function displayCurrent(event) {
	const selectedAsset = event.target.value;
	const socketUrl = getUrl(selectedAsset);
	console.log(socketUrl);
	const webs = new WebSocket(socketUrl)

	const current = document.getElementById('current');
	const change = document.getElementById('change');

	webs.onmessage = function (event) {
		const jsonObject = JSON.parse(event.data);
		current.innerText = jsonObject.c;
		change.innerText = jsonObject.P;
	}

}

// CODE
const selectListTrade = document.getElementById('asset_selection_id');
selectListTrade.addEventListener('change', displayCurrent);


// displayText();
const test = 'https://carloswm85.github.io/portfolio/college-projects/f_2021-wdd330/projects/project02_binance-orders/src/scripts/allPrices.json';
showLists(allPrices);