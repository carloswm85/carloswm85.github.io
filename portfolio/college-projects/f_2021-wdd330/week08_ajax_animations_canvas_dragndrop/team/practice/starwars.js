// Create a basic application and use fetch to pull a list of people or ships. Display this list in the browser window.

const url = 'https://swapi.dev/api/people/';
const container = document.getElementById('fetch-output');

fetch(url)
	.then(function (promise) {
		return promise;
	})
	.then(response => {
		return response.json();
	})
	.then(function (data) {
		// from the 'result' array in data object
		// get every single 'person' object, and display it
		for (let index = 1; index < data.count; index++) {
			const entity = data.results[index];
			const entityTitle = document.createElement('h3')
			const entityContainer = document.createElement('ul');

			entityTitle.innerHTML = `${entity['name']}`;
			entityContainer.appendChild(entityTitle);

			// TODO: Process films

			for (const [key, value] of Object.entries(entity)) {
				// console.log(`entity${index} → ${key}: ${value}`);
				const entityFeature = document.createElement('li')
				entityFeature.innerHTML = `${key}: ${value}`;
				entityContainer.appendChild(entityFeature);
			}
			container.appendChild(entityContainer);
		}
	})
	.catch(function (err) {
		console.log(err);
	});

// TODO: make buttons work
// https://byui.instructure.com/courses/160562/quizzes/2612997?module_item_id=20163472
const previous = document.getElementById('previous');
const next = document.getElementById('next');

previous.addEventListener('click', evento => alert('prevo'));
next.addEventListener('click', evento => alert('nexto'));