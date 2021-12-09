import Keys, {
	something
} from './modules/keys.mjs';
import {
	getJson,
	getText,
	listFiller
} from './modules/utilities.mjs';
import {
	setUpTabs
} from './modules/styling.mjs';
import Minichart, {
	changeTimeframe
} from './modules/minichart.mjs';

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Chart
const chart = new Minichart();
chart.setChart();

const selectListChart = document.getElementById('asset_selection_chart_id');
const selectListTimeframe = document.getElementById('timeframe_selection_chart_id');

selectListChart.addEventListener('change', () => {
	chart.changeChart(selectListChart.value, selectListTimeframe.value);
});

selectListTimeframe.addEventListener('change', () => {
	chart.changeChart(selectListChart.value, selectListTimeframe.value);
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LISTs
// 1
async function showLists(url) {
	const data = await getJson(url);
	const symbolsListTrade = document.getElementById('asset_selection_id');
	const symbolsListChart = document.getElementById('asset_selection_chart_id');
	const symbolsListDefault = document.getElementById('asset_selection_default_id');

	const timeframesListChart = document.getElementById('timeframe_selection_chart_id');
	const symbolsArray = [];

	const timeframesArray = ['1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '8h', '12h', '1d', '3d', '1w', '1M'];

	data.forEach(element => {
		const symbol = element.symbol;
		symbolsArray.push(symbol)
	})

	symbolsArray.sort();

	symbolsArray.forEach(element => {
		const symbol = element;

		const optionTrade = document.createElement('option');
		optionTrade.setAttribute('value', symbol);
		optionTrade.innerText = symbol;
		if (symbol == 'BTCUSDT') optionTrade.defaultSelected = true;
		symbolsListTrade.appendChild(optionTrade);

		const optionChart = document.createElement('option');
		optionChart.setAttribute('value', symbol);
		optionChart.innerText = symbol;
		if (symbol == 'BTCUSDT') optionChart.defaultSelected = true;
		symbolsListChart.appendChild(optionChart);

		const optionDefault = document.createElement('option');
		optionDefault.setAttribute('value', symbol);
		optionDefault.innerText = symbol;
		if (symbol == 'BTCUSDT') optionDefault.defaultSelected = true;
		symbolsListDefault.appendChild(optionDefault);
	});

	timeframesArray.forEach(timeframe => {
		const optionTimeframe = document.createElement('option');
		optionTimeframe.setAttribute('value', timeframe);
		optionTimeframe.innerText = timeframe;
		if (timeframe == '1m') optionTimeframe.defaultSelected = true;
		timeframesListChart.appendChild(optionTimeframe);
	})
}

// 2
function getUrl(assetName = 'BTCUSDT') {
	// const timeframe = '1m';
	const assetNameLowered = assetName.toLowerCase();
	// const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@kline_${timeframe}`;
	const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@ticker`;
	return url;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ASSET CURRENT VALUE
let formatterCurrency = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
}); // https://stackoverflow.com/a/16233919/7389293

function formaterPercentage(number) {
	if (number < 0) {
		return`${parseFloat(number).toFixed(2)} %`;
	} else if (number > 0) {
		return `+${parseFloat(number).toFixed(2)} %`;
	} else {
		return ` ${parseFloat(number).toFixed(2)} %`;
	};
}


function displayTradeableAsset(asset) {
	const socketUrl = getUrl(asset);
	const webs = new WebSocket(socketUrl);

	const current = document.getElementById('current');
	const change = document.getElementById('change');

	webs.onmessage = function (event) {
		const jsonObject = JSON.parse(event.data);
		current.innerText = formatterCurrency.format(jsonObject.c);
		change.innerText = formaterPercentage(jsonObject.P);
	}

	return webs;
}

function changeTradeableAsset(asset, websocket) {
	websocket.close();
	websocket.onclose = function () {
		websocket = null;
		websocketDisplay = displayTradeableAsset(asset);
	}
}

// CODE
let websocketDisplay = displayTradeableAsset();
const selectListTrade = document.getElementById('asset_selection_id');
selectListTrade.addEventListener('change', () => {
	changeTradeableAsset(selectListTrade.value, websocketDisplay);
});

// displayText();
const test = 'https://carloswm85.github.io/portfolio/college-projects/f_2021-wdd330/projects/project02_binance-orders/src/scripts/allPrices.json';
showLists(allPrices);
setUpTabs();
document.getElementById("settings").click();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Radio Buttons Selection

// var rb_tabs = document.querySelectorAll('input[name="rbutton-tab"]');
// console.log(rb_tabs);
// rb_tabs.forEach(rbutton => {
// 	rbutton.addEventListener("change", function (event) {
// 		var selectedTab = event.target.value;
// 		setUpTabs(selectedTab, true);
// 	});
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> API Key Storage
