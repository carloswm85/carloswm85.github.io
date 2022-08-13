// JSON REFERENCES
// Why do this? To make adding new links easier, while using JSON file.

const requestURL = "\\data\\blog.json";

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const entries  = jsonObject["entries"];
		const postHeading = document.querySelector("#postHeading");
		const postBody = document.querySelector("#postBody");
		const entryTimestamp = location.pathname.replace(/[\D]/g, "");
		
		const post = entries.find(item => {
			return item.timestamp == entryTimestamp;
		});

		var humanDate = new Date(0);
		var timestamp = post.timestamp;
		humanDate.setUTCSeconds(timestamp);

		postHeading.innerHTML = `
		<div class="post-heading">
			<h1>${post.title}</h1>
			<h2 class="subheading">${post.subtitle}</h2>
			<span class="meta">
				Posted by
					<a href="/pages/about.html" target="_blank">${post.author}</a>
					on 
					<a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank" title="${humanDate}">${timestamp}</a> Unix Time
			</span>
		</div>
		`;

		postBody.innerHTML = `
		<div class="col-md-10 col-lg-8 col-xl-7">
			<p>1</p>
			<p>2</p>
			<p>3</p>
			<p>4</p>
			<p>5</p>

			<h2 class="section-heading">h2</h2>
			<p>6</p>
			<blockquote class="blockquote">Quote</blockquote>
			<a href="#!"><img class="img-fluid" src="/assets/img/post-sample-image.jpg" alt="altText" /></a>
			<span class="caption text-muted">text</span>
			<p>7</p>
			<p>8</p>
			<h2 class="section-heading">h2</h2>
			<p>9</p>
		</div>
		`;
	});
