[
	{
		"url": "",
		"wss": "",

		"e": "kline",
		"E": 1638415662714,
		"s": "BTCUSDT",
		"k": {
			"t": 1638415620000,
			"T": 1638415679999,
			"s": "BTCUSDT",
			"i": "1m",
			"f": 1171303940,
			"L": 1171304784,
			"o": "56036.09000000",
			"c": "56000.23000000",
			"h": "56044.49000000",
			"l": "55974.65000000",
			"v": "30.80438000",
			"n": 845,
			"x": false,
			"q": "1725081.47797320",
			"V": "18.41639000",
			"Q": "1031375.64548720",
			"B": "0"
		}
	},
	{
		"url": "https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-ticker-streams",
		"wss": "wss://stream.binance.com:9443/ws/${assetNameLowered}@ticker",

		"e": "24hrTicker", // Event type
		"E": 123456789, // Event time
		"s": "BNBBTC", // Symbol
		"p": "0.0015", // Price change
		"P": "250.00", // Price change percent
		"w": "0.0018", // Weighted average price
		"x": "0.0009", // First trade(F)-1 price (first trade before the 24hr rolling window)
		"c": "0.0025", // Last price
		"Q": "10", // Last quantity
		"b": "0.0024", // Best bid price
		"B": "10", // Best bid quantity
		"a": "0.0026", // Best ask price
		"A": "100", // Best ask quantity
		"o": "0.0010", // Open price
		"h": "0.0025", // High price
		"l": "0.0010", // Low price
		"v": "10000", // Total traded base asset volume
		"q": "18", // Total traded quote asset volume
		"O": 0, // Statistics open time
		"C": 86400000, // Statistics close time
		"F": 0, // First trade ID
		"L": 18150, // Last trade Id
		"n": 18151 // Total number of trades
	}
]