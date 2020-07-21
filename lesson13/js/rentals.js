const rentalsJSON = "https://carloswm85.github.io/lesson13/data/rentals.json";

fetch(rentalsJSON)
.then((response) => response.json())
.then((jsObject) => {
  let rentals = jsObject.rentals;
  console.log(rentals);

  let i = 0;
  rentals.forEach(rental => {
    document.getElementById(`type-${i}`).innerHTML = rental.type;
    document.getElementById(`capacity-${i}`).textContent = rental.capacity;
    
    document.getElementById(`reservation-half-${i}`).textContent = rental.reservationHalf;
    document.getElementById(`reservation-full-${i}`).textContent = rental.reservationFull;
    document.getElementById(`walkin-half-${i}`).textContent = rental.walkinHalf;
    document.getElementById(`walkin-full-${i}`).textContent = rental.walkinFull;
    i++;
  });

});