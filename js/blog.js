// JSON REFERENCES
// Why do this? To make adding new links easier, while using JSON file.

const requestURL = "\\data\\blog.json";

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const entries = jsonObject["entries"];
		const entriesView = document.querySelector("#entries");

		console.log(entries[0].id);

		for (let index = 0; index < entries.length; index++) {
			var postPreview = document.createElement("div");
			var humanDate = new Date(0);
			var timestamp = entries[index].timestamp;
			humanDate.setUTCSeconds(timestamp);

			postPreview.innerHTML = `
			<!-- Post preview-->
			<div class="post-preview">
				<a href="pages/blog/${timestamp}.html" target="_blank">
					<h2 class="post-title">${entries[index].title}</h2>
					<h3 class="post-subtitle">${entries[index].subtitle}</h3>
				</a>
				<p class="post-meta">
						Posted by
						<a href="/pages/about.html" target="_blank">${entries[index].author}</a>
						on 
						<a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank" title="${humanDate}">${timestamp}</a> Unix Time
				</p>
			</div>
			<!-- Divider-->
			<hr class="my-4" />
			`;
			entriesView.appendChild(postPreview);
		}

		var pager = document.createElement("div"); 
		pager.innerHTML = `
		<!-- Pager-->
		<div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
		`;
		entriesView.appendChild(pager);
	});
