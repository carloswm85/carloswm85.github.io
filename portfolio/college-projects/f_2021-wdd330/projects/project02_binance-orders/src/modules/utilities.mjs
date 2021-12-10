// 1
export async function getJson(url = null, requestOptions = null) {
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

