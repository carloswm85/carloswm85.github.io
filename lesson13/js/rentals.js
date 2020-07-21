const rentalsJSON = "https://carloswm85.github.io/lesson13/data/rentals.json";
const parsedJSON = JSON.parse(rentalsJSON);

console.log(typeof(parsedJSON));
console.log(parsedJSON);

fetch(parsedJSON)
.then((response) => response.json())
.then((jsObject) => {
  
  document.getElementById('type').innerHTML = jsObject.rentals[0].type;

  let test1 = jsObject.rentals[0].capacity;
  document.getElementById('capacity').textContent = test1;
  console.log(test1);

  let test2 = jsObject.rentals[0].reservationHalf;
  document.getElementById('reservation-half').textContent = test2;
  console.log(test2);
  console.log(typeof(test2));

  document.getElementById('reservation-full').textContent = jsObject.rentals[0].reservationFull;

  document.getElementById('walkin-half').innerHTML = jsObject.rentals[0].walkinHalf;

  document.getElementById('walkin-full').innerHTML = jsObject.rentals[0].walkinFull;
});