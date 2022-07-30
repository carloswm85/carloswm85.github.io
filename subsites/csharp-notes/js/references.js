// JSON BOOKS
const requestURL = ".\\data\\references.json";

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const references = jsonObject["references"];
		console.table(jsonObject); // temporary checking for valid response and data parsing

		for (let i = 0; i < references.length; i++) {
			let container = document.createElement('div');
			container.innerHTML = `<button class="btn btn-dark" type="button" data-bs-placement="top" title="${i}" data-bs-toggle="collapse" data-bs-target="#${references[i].anchorName}" aria-expanded="false" aria-controls="${references[i].anchorName}">${references[i].buttonName}</button>`;
			document.querySelector("#target").appendChild(container);
		}
	});