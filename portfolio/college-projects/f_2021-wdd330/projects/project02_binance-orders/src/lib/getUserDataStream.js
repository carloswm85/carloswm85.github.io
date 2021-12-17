// import 'regenerator-runtime/runtime';
import { spotMarketDataRequest } from './requestClient.js';

export const getUserDataStream = (apiKey) => spotMarketDataRequest(apiKey)('POST', '/api/v3/userDataStream')
	.post('/api/v3/userDataStream')
	.then(({
		data
	}) => data.listenKey);

