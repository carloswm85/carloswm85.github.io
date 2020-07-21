const rentalsJSON = "https://carloswm85.github.io/lesson13/data/rentals.json";

fetch(rentalsJSON)
.then((response) => response.json())
.then((jsObject) => {
  let rentals = jsObject.rentals;
  let currentPage = window.location.pathname;
  let i = 0;

  if (currentPage == '/lesson13/index.html') {
    rentals.forEach(rental => {
      document.getElementById(`type-${i}`).innerHTML = rental.type;
      document.getElementById(`features-${i}`).innerHTML = rental.features;
      document.getElementById(`capacity-${i}`).textContent = rental.capacity;
      i++;
    });

  } else {
    rentals.forEach(rental => {
      document.getElementById(`type-${i}`).innerHTML = rental.type;
      document.getElementById(`capacity-${i}`).textContent = rental.capacity;
      
      document.getElementById(`reservation-half-${i}`).textContent = rental.reservationHalf;
      document.getElementById(`reservation-full-${i}`).textContent = rental.reservationFull;
      document.getElementById(`walkin-half-${i}`).textContent = rental.walkinHalf;
      document.getElementById(`walkin-full-${i}`).textContent = rental.walkinFull;
      i++;
    });    
  }

  

});

