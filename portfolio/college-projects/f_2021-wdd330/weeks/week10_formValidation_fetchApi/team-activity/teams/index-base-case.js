// Test Case

import {
	getJson,
	getLocation
} from './utilities-draft.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function testGetQuakesForLocation() {

	const geoLocationPromise = getLocation();
	geoLocationPromise
		.then(data => {

			// console.log(data);			
			// const geoUrl = baseUrl + `&latitude=${data.coords.latitude}&longitude=${data.coords.longitude}&maxradiuskm=${100}`;

			// San Francisco, California, area
			const geoUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02&latitude=37.4013952&longitude=-122.9209344&maxradiuskm=100'; // For testing purposes
			
			
			// console.log(geoUrl);			
			const getJsonInformation = getJson(geoUrl);

			console.log(getJsonInformation);			
			getJsonInformation.then(data2 => {
				console.log(data2);
			});
		})
		.catch(err => {
			console.log(err);
		});
}

testGetQuakesForLocation();