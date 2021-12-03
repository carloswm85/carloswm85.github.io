import {
	getJson
} from './utilities.js';

const chartSetting = {
	width: 0,
	height: 350,
	layout: {
		backgroundColor: '#000000',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
}

const chart = LightweightCharts.createChart(document.getElementById('chart'), chartSetting);

const timeAxis = chart.timeScale();
timeAxis.applyOptions({ 'timeVisible': true });
// console.log(timeAxis);


// const lineSeries = chart.addLineSeries();
const bull = '#26a69a';
const bear = '#ff5252';

var candleSeries = chart.addCandlestickSeries({
	upColor: bull,
	downColor: bear,
	borderDownColor: bear,
	borderUpColor: bull,
	wickDownColor: bear,
	wickUpColor: bull,
});

function getUrl(assetName) {
	const timeframe = '1m';
	const assetNameLowered = assetName.toLowerCase();
	const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@kline_${timeframe}`;
	return url;
}

// TODO: https://www.youtube.com/watch?v=EeT3Ore4Sao&ab_channel=PartTimeLarry
// 3
async function displayCurrentChart(event) {
	const selectedAsset = event.target.value;

	// TODO: Remove series and add it again, using a chart object: https://tradingview.github.io/lightweight-charts/api/interfaces/IChartApi#removeseries 
	// chart.removeSeries(candleSeries);	

	// Set HISTORICAL storical Data
	const historicalUrl = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m';

	const data = await getJson(historicalUrl);
	const historicalCandlesticks = []

	data.forEach(element => {
		const candlestick = {
			'time': element[0] / 1000,
			'open': element[1],
			'high': element[2],
			'low': element[3],
			'close': element[4]
		}
		historicalCandlesticks.push(candlestick);
	});

	candleSeries.setData(historicalCandlesticks);

	// Stream CURRENT Data
	const socketUrl = getUrl(selectedAsset);
	const webs = new WebSocket(socketUrl)

	webs.onmessage = function (event) {
		const jsonObject = JSON.parse(event.data);
		const candlestick = jsonObject.k;
		candleSeries.update({
			'time': candlestick.t / 1000,
			'open': candlestick.o,
			'high': candlestick.h,
			'low': candlestick.l,
			'close': candlestick.c
		});
	}
}

// CODE
const selectListChart = document.getElementById('asset_selection_chart_id');
selectListChart.addEventListener('change', displayCurrentChart);

