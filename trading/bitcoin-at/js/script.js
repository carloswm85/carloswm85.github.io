
// LAST SAVING DATE
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

let last = document.lastModified;
let date = new Date(last);
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let local = date.toLocaleDateString('en-US'. options);
let fullDate = `${local} ${hours}:${minutes}:${seconds}`;

document.getElementById('currentDate').textContent = fullDate;

// TOGGLE MENU
function toggleMenu() {
  document.getElementById('navigation-list').classList.toggle('hide-navigation-list');
}

// JSON BOOKS
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
	const prophets = jsonObject['prophets'];
	console.table(jsonObject);  // temporary checking for valid response and data parsing
	for (let i = 0; i < prophets.length; i++ ) {
		let card = document.createElement('section');
		let h2 = document.createElement('h2');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		let image = document.createElement('img');

		h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
		p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
		p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
		image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
		image.setAttribute('src', prophets[i].imageurl);
		
		card.appendChild(h2);
		card.appendChild(p1);
		card.appendChild(p2);
		card.appendChild(image);

		document.querySelector('div.cards').appendChild(card);
	}
  });

