import {
	getJson,
	getLocation
} from "./utilities-example.js";

let quakes = [];
const baseUrl = "https://example.com";

async function everything() {
	let locResp = await getLocation();
	console.log(locResp);

	quakes = await getJson(query);
	console.log(quakes);

	// CODE
}

everything();

