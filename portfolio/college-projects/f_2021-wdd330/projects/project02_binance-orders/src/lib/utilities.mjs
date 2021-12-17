// 1
export async function getJson(url = null, requestOptions = null) {
	console.log('gJ');
	console.log(url);
	console.log(requestOptions);	
		
	return fetch(url, requestOptions)
		.then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			} else {
				return response.json();
			}
		})
		.catch(function (error) {
			console.log(error);
		});
}

