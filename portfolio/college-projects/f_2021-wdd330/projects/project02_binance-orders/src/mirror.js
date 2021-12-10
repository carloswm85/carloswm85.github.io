import {
	getJson
} from './modules/utilities.mjs';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("X-MBX-APIKEY", "W4wBtjQxbUWdDiRak0kC6mbIi28zYCmghxIa6vUTUWljNilQA766nHH9RN6I1tpf");
// myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1:3002');
// myHeaders.append('Access-Control-Allow-Methods', 'POST');
// myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
	mode: 'cors' // default
};

let listen = getJson("https://testnet.binance.vision/api/v3/userDataStream", requestOptions);


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