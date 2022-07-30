// JSON BOOKS
const requestURL = "https://carloswm85.github.io/sites/bitcoin-at/data/libros.json";

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const books = jsonObject["books"];
		console.table(jsonObject); // temporary checking for valid response and data parsing

		for (let i = 0; i < books.length; i++) {
			let card = document.createElement("article");
			let image = document.createElement("img");
			card.classList.add("clearfix");

			image.setAttribute(
				"alt",
				'"' +
					books[i].data["Nombre"] +
					'"' +
					", escrito por " +
					books[i].data["Autor"] +
					"."
			);
			image.setAttribute("src", books[i].cover);
			card.appendChild(image);

			for (key in books[i].data) {
				let b = books[i].data;

				if (b[key] != null) {
					let span = document.createElement("span");
					span.classList.add("span-bold");
					span.textContent = key;

					let p = document.createElement("p");
					p.appendChild(span);
					p.append(": " + b[key]);

					card.appendChild(p);
				}
			}

			for (key in books[i].links) {
				let b = books[i].links;

				if (b[key] != null) {
					let spanTag = document.createElement("span");
					spanTag.classList.add("span-bold");
					spanTag.textContent = key;

					let pTag = document.createElement("p");
					pTag.appendChild(spanTag);

					let aTag = document.createElement("a");
					aTag.classList.add("link-black");
					aTag.classList.add("link-slimed");
					aTag.textContent = "Enlace externo";
					aTag.setAttribute("href", b[key]);
					pTag.append(": ");
					pTag.appendChild(aTag);

					card.appendChild(pTag);
				}
			}

			document.querySelector("section.books").appendChild(card);
		}
	});
