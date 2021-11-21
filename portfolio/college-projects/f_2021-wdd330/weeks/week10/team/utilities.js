// // https: //github.com/node-fetch/node-fetch#commonjs
// const fetch = (...args) => import('node-fetch').then(({
// 	default: fetch
// }) => fetch(...args));

function getJson(url) {
	return window.fetch(url)
		.then(response => {
			return response.json();
		});
}

console.log(getJson('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02'));
