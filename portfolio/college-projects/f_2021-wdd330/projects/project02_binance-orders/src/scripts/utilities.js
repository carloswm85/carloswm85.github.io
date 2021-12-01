// 1
export async function getJson(url) {
	return fetch(url)
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

// 02
export function getText(text) {
	// let stringyfied = JSON.stringify(text); // Not fixed
	const stringyfied = JSON.stringify(text, null, "\t"); // Last two parametros fix display.
	return stringyfied;
}

export function listFiller() {

}