fetch("https://api.binance.com/api/v1/ticker/allPrices").then(
	(response) => {
		response.json().then(function (data) {
			console.log(data);
		});
	}
);