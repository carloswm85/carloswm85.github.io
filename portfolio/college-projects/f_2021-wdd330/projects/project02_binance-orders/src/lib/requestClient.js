// import 'regenerator-runtime/runtime';
import getRequestInstance from './getRequestInstance.js';

const publicDataRequest = (apiKey, baseURL) => (
	method = 'GET',
	path,
	data = {},
) => {
	if (!apiKey) {
		throw new Error('API key is missing');
	}

	return getRequestInstance({
		baseURL,
		headers: {
			'content-type': 'application/json',
			'X-MBX-APIKEY': apiKey,
			'Access-Control-Allow-Origin': 'http://localhost:1234'
		},
		method,
		url: path,
	});
};

const spotMarketDataRequest = (apiKey, baseURL = 'https://api.binance.com') => publicDataRequest(apiKey, baseURL);

export {
	spotMarketDataRequest,
};
