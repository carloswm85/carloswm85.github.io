import {
	getJson
} from './utilities.mjs';

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("X-MBX-APIKEY", "m3ZZ2kMjx7PeMWxNxBhF4ZDEjyD6BAXGTXUiE9X4rMNRQu1CLlwXStDm889GSf4P");
// // myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1:3002');
// // myHeaders.append('Access-Control-Allow-Methods', 'POST');
// // myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// // myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

// var requestOptions = {
// 	method: 'POST',
// 	headers: myHeaders,
// 	// redirect: 'follow',
// };

// let listen = getJson("https://testnet.binance.vision/api/v3/userDataStream", requestOptions);


// // let listen = await fetch("https://testnet.binance.vision/api/v3/userDataStream", requestOptions)
// // 	.then(response => {
// // 		console.log(response);
// // 		return response.text();
// // 	})
// // 	.then(result => {
// // 		console.log(result)
// // 		return result;
// // 	})
// // 	.catch(error => console.log('error', error));

// console.log(listen);

async function getListenKey() {
	const apiKey23 = 'm3ZZ2kMjx7PeMWxNxBhF4ZDEjyD6BAXGTXUiE9X4rMNRQu1CLlwXStDm889GSf4P';
	// const url23 = 'http://localhost:9000';
	const url23 = 'https://api.binance.com/api/v3/userDataStream';

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("X-MBX-APIKEY", apiKey23);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		redirect: 'follow',
		mode: 'no-cors'
	};
	const listenKey = await getJson(url23, requestOptions);
	return listenKey;
}

console.log(getListenKey());
