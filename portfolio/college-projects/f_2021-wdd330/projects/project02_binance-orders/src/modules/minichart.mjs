import {
	getJson
} from './utilities.mjs';

export default class Minichart {

	// constructor
	constructor() {

		this.chartSetting = {
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
			this.chartSetting);

		this.timeAxis = this.chart.timeScale();
		this.timeAxis.applyOptions({
			'timeVisible': true
		});

		this.bull = '#26a69a';
		this.bear = '#ff5252';

		this.candleSeries = this.chart.addCandlestickSeries({
			upColor: this.bull,
			downColor: this.bear,
			borderDownColor: this.bear,
			borderUpColor: this.bull,
			wickDownColor: this.bear,
			wickUpColor: this.bull,
		});

	}

	// 1
	getUrl(assetName) {
		const timeframe = '1m';
		const assetNameLowered = assetName.toLowerCase();
		const url = `wss://stream.binance.com:9443/ws/${assetNameLowered}@kline_${timeframe}`;
		return url;
	}

	// 02
	// Set HISTORICAL storical Data
	async setCurrentChart() {
		this.historicalUrl = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m';

		this.data = await getJson(this.historicalUrl);
		this.historicalCandlesticks = [];

		this.data.forEach(element => {
			const candlestick = {
				'time': element[0] / 1000,
				'open': element[1],
				'high': element[2],
				'low': element[3],
				'close': element[4]
			};
			this.historicalCandlesticks.push(candlestick);
		});
		this.candleSeries.setData(this.historicalCandlesticks);
		this.updateChart();
	}

	updateChart() {		
		this.socketUrl = this.getUrl('BTCUSDT');
		this.webs = new WebSocket(this.socketUrl);

		this.webs.onmessage = function (event) {
			const jsonObject = JSON.parse(event.data);
			const candlestick = jsonObject.k;
			this.candleSeries.update({
				'time': candlestick.t / 1000,
				'open': candlestick.o,
				'high': candlestick.h,
				'low': candlestick.l,
				'close': candlestick.c
			});
		}
	}


	// TODO: https://www.youtube.com/watch?v=EeT3Ore4Sao&ab_channel=PartTimeLarry
	// 2
	async displayCurrentChart(event) {
		this.selectedAsset = event.target.value;

		// TODO: Remove series and add it again, using a chart object: https://tradingview.github.io/lightweight-charts/api/interfaces/IChartApi#removeseries 
		// chart.removeSeries(candleSeries);	

		// Stream CURRENT Data
		this.socketUrl = this.getUrl(selectedAsset);
		this.webs = new WebSocket(socketUrl);

		this.webs.onmessage = function (event) {
			const jsonObject = JSON.parse(event.data);
			const candlestick = jsonObject.k;
			this.candleSeries.update({
				'time': candlestick.t / 1000,
				'open': candlestick.o,
				'high': candlestick.h,
				'low': candlestick.l,
				'close': candlestick.c
			});
		}
	}

} // end class




