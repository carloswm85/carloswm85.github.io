import {
	getJson
} from './utilities.mjs';

const bull = '#26a69a';
const bear = '#ff5252';


export default class Minichart {

	// constructor
	constructor() {

		const chartSettings = {
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

		const chart = LightweightCharts.createChart(
			document.getElementById('chart'),
			chartSettings);

		const timeAxis = chart.timeScale();
		timeAxis.applyOptions({
			'timeVisible': true
		});

		this.candleSeries = chart.addCandlestickSeries({
			upColor: bull,
			downColor: bear,
			borderDownColor: bear,
			borderUpColor: bull,
			wickDownColor: bear,
			wickUpColor: bull
		});
	}

	// 01
	getSocketUrl(assetName) {
		const timeframe = '1m';
		const assetNameLowered = assetName.toLowerCase();
		const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@kline_${timeframe}`;
		return url;
	}

	// 02
	async setCurrentChart() {
		// Set HISTORICAL storical Data
		// TODO https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data
		const historicalUrl = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m';
		const data = await getJson(historicalUrl);
		const historicalCandlesticks = [];

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
		this.candleSeries.setData(historicalCandlesticks);
	}

	// 03
	getCandleSeries() {
		return this.candleSeries;
	}
	
	// 04
	async updateChart() {
		// TODO https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-streams
		const socketUrl2 = this.getSocketUrl('BTCUSDT');
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


	// 05
	async changeCryptocurrency(event) {
		// TODO: https://www.youtube.com/watch?v=EeT3Ore4Sao&ab_channel=PartTimeLarry
		const selectedAsset = event.target.value;

		// TODO: Remove series and add it again, using a chart object: https://tradingview.github.io/lightweight-charts/api/interfaces/IChartApi#removeseries 
		// chart.removeSeries(this.candleSeries);	

		// Stream CURRENT Data
		const socketUrl = this.getUrl(selectedAsset);
		const webs2 = new WebSocket(socketUrl);

		webs2.onmessage = function (event) {
			const jsonObject = JSON.parse(event.data);
			const candlestick = jsonObject.k;
			this.this.candleSeries.update({
				'time': candlestick.t / 1000,
				'open': candlestick.o,
				'high': candlestick.h,
				'low': candlestick.l,
				'close': candlestick.c
			});
		}
	}

	changeTimeframe(evet) {
		console.log('changeTimeframe')
	}

} // end class