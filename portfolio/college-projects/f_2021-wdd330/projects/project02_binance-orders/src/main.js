import Keys, {
	something
} from './modules/keys.mjs';

import Client from './modules/client.mjs';

import {
	getJson
} from './modules/utilities.mjs';

import {
	setUpTabs
} from './modules/styling.mjs';

import Minichart, {
	changeTimeframe
} from './modules/minichart.mjs';


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Endpoint Generation
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Keys TAB
// TODO: https://blog.logrocket.com/localstorage-javascript-complete-guide/
// TODO:E:\Repos\1_carloswm85.github.io\portfolio\college-projects\f_2021-wdd330\additional-content\js30\15 - LocalStorage\index-FINISHED.html
const keys = new Keys();
const apiKeyObject = keys.getKey(2);
const secretKeyObject = keys.getKey(3);

// Query the elements
const keysArray = document.querySelectorAll('.keys');
const keysSaveArray = document.querySelectorAll('.keys-save');


keysArray.forEach(inputKey => {
	inputKey.addEventListener('dblclick', toggleVisibility);
});

keysSaveArray.forEach(saveKeyButton => {
	saveKeyButton.addEventListener('click', saveKeys);
});

function toggleVisibility(event) {
	const type = event.target.getAttribute('type');
	event.target.setAttribute(
		'type',
		type === 'password' ? 'text' : 'password'
	);
};

function saveKeys(event) {
	const buttonSaveId = event.target.id;
	const apiKey = document.getElementById(`${buttonSaveId}-apiKey`).value;
	const secretKey = document.getElementById(`${buttonSaveId}-secretKey`).value;
	console.log(apiKey);
	console.log(secretKey);
};

// const addItems = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
// const items = JSON.parse(localStorage.getItem('items')) || [];

// function addItem(e) {
// 	e.preventDefault();
// 	const text = (this.querySelector('[name=item]')).value;
// 	const item = {
// 		text,
// 		done: false
// 	};

// 	items.push(item);
// 	populateList(items, itemsList);
// 	localStorage.setItem('items', JSON.stringify(items));
// 	this.reset();
// }

// function populateList(plates = [], platesList) {
// 	platesList.innerHTML = plates.map((plate, i) => {
// 		return `
//       <li>
//         <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
//         <label for="item${i}">${plate.text}</label>
//       </li>
//     `;
// 	}).join('');
// }

// function toggleDone(e) {
// 	if (!e.target.matches('input')) return; // skip this unless it's an input
// 	const el = e.target;
// 	const index = el.dataset.index;
// 	items[index].done = !items[index].done;
// 	localStorage.setItem('items', JSON.stringify(items));
// 	populateList(items, itemsList);
// }

// addItems.addEventListener('submit', addItem);
// itemsList.addEventListener('click', toggleDone);

// populateList(items, itemsList);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Client
const client = new Client(apiKeyObject, secretKeyObject);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("X-MBX-APIKEY", "W4wBtjQxbUWdDiRak0kC6mbIi28zYCmghxIa6vUTUWljNilQA766nHH9RN6I1tpf");
// myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1:3002');
// myHeaders.append('Access-Control-Allow-Methods', 'POST');
// myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
myHeaders.append('User-Agent', 'package/1.0.0');

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
	// mode: 'no-cors' // default
};

let listen = await getJson("https://testnet.binance.vision/api/v3/userDataStream", requestOptions);


// let listen = await fetch("https://testnet.binance.vision/api/v3/userDataStream", requestOptions)
// 	.then(response => {
// 		console.log(response);		
// 		return response.text();
// 	})
// 	.then(result => {
// 		console.log(result)
// 		return result;
// 	})
// 	.catch(error => console.log('error', error));

console.log(listen);

function getUrlSocket(key = 'someKey', assetString = 'BTCUSDT', timeframeString = '1m') {
	const url = `wss://stream.binance.com:9443/ws/${key}`;
	const url2 = `wss://stream.binance.com:9443/stream?streams=${key}`;
	const assetStringLowered = assetString.toLowerCase();
	const url3 = `wss://stream.binance.com:9443/ws/${assetStringLowered}@kline_${timeframeString}`;
	return url;
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Chart TAB
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
		return `${parseFloat(number).toFixed(2)} %`;
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
document.getElementById("trade").click();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Radio Buttons Selection
// var rb_tabs = document.querySelectorAll('input[name="rbutton-tab"]');
// console.log(rb_tabs);
// rb_tabs.forEach(rbutton => {
// 	rbutton.addEventListener("change", function (event) {
// 		var selectedTab = event.target.value;
// 		setUpTabs(selectedTab, true);
// 	});
// });