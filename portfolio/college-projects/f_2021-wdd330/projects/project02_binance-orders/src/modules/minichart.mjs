import {
	getJson
} from './utilities.mjs';

/** @type {import('lightweight-charts')} */
const LightweightCharts = window.LightweightCharts;


const bull = '#26a69a';
const bear = '#ff5252';


export default class Minichart {

	// 00
	constructor() {

		this.chartSettings = {
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

		this.chart = LightweightCharts.createChart(
			document.getElementById('chart'),
			this.chartSettings);

		const timeAxis = this.chart.timeScale();
		timeAxis.applyOptions({
			'timeVisible': true
		});
	}

	// 01
	getUrlHistorical(assetString, timeframeString) {
		return `https://api.binance.com/api/v3/klines?symbol=${assetString}&interval=${timeframeString}`;
	}

	// 02
	getUrlSocket(assetString, timeframeString) {
		const assetStringLowered = assetString.toLowerCase();
		const url = `wss://stream.binance.com:9443/ws/${assetStringLowered}@kline_${timeframeString}`;
		return url;
	}

	// 03
	getCandleSeries() {
		return this.candleSeries;
	}

	// 04
	async setChart(asset = 'BTCUSDT', timeframe = '1m') {
		// Set HISTORICAL storical Data
		// TODO https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data
		// console.log(asset);
		const historicalUrl = this.getUrlHistorical(asset, timeframe);
		// console.log(historicalUrl);
		const data = await getJson(historicalUrl);
		// console.log(data);		
		let historicalCandlesticks = [];

		data.forEach(element => {
			let candlestick = {
				time: element[0] / 1000,
				open: element[1],
				high: element[2],
				low: element[3],
				close: element[4]
			};
			historicalCandlesticks.push(candlestick);
		});

		this.candleSeries = this.chart.addCandlestickSeries({
			upColor: bull,
			downColor: bear,
			borderDownColor: bear,
			borderUpColor: bull,
			wickDownColor: bear,
			wickUpColor: bull
		});

		this.candleSeries.setData(historicalCandlesticks);
		// console.log(this.candleSeries);

		this.updateChart(asset, timeframe);
	}

	// 05
	async updateChart(asset = 'BTCUSDT', timeframe = '1m') {
		// TODO https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-streams
		const socketUrl2 = this.getUrlSocket(asset, timeframe);
		const webs = new WebSocket(socketUrl2);
		const candleSeries = await this.getCandleSeries();

		webs.onmessage = function (event) {
			let jsonObject = JSON.parse(event.data);
			let candlestick = jsonObject.k;

			let candle = {
				time: candlestick.t / 1000,
				open: candlestick.o,
				high: candlestick.h,
				low: candlestick.l,
				close: candlestick.c
			};

			candleSeries.update(candle);
		}
	}

	// 06
	async changeChart(assetValue, timeframeValue) {
		const candleSeries = await this.getCandleSeries();
		this.chart.removeSeries(candleSeries);
		this.setChart(assetValue, timeframeValue);
	}
} // end class


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Functions
export function changeTimeframe(evet) {
	console.log('changeTimeframe')
}