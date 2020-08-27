
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
const requestURL = 'https://carloswm85.github.io/trading/bitcoin-at/data/libros.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const books = jsonObject['books'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < books.length; i++ ) {
      let card = document.createElement('article');
      let image = document.createElement('img');
      let p0 = document.createElement('p');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');
      let p6 = document.createElement('p');
      let p7 = document.createElement('p');
      let p8 = document.createElement('p');
      let span = document.createElement('span');
      span.classList.add('span-bold');
      
      image.setAttribute('alt', books[i].name + ', escrito por ' + books[i].author);
      image.setAttribute('src', books[i].cover);
      card.appendChild(image);

      p0.textContent = 'Nombre: ' + books[i].name;
      span.appendChild(p0);
      card.appendChild(span);

      p1.textContent = 'Autor: ' + books[i].author;
      span.appendChild(p1);
      card.appendChild(span);

      p2.textContent = 'Idiomas disponibles: ' + books[i].language;
      p3.textContent = 'Notas: ' + books[i].notes;
      p4.textContent = 'Amazon: ' + books[i].amazon;
      p5.textContent = 'Google: ' + books[i].google;
      p6.textContent = 'YouTube: ' + books[i].youtube;
      p7.textContent = 'Sitio oficial: ' + books[i].site;
      p8.textContent = 'Descarga: ' + books[i].download;
            
      
      
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(p5);
      card.appendChild(p6);
      card.appendChild(p7);
      card.appendChild(p8);
      
		  document.querySelector('section.books').appendChild(card);
	  }
});

