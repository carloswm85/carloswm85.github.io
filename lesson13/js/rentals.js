const rentalsJSON = "../data/rentals.json";

console.log(typeof(rentalsJSON));

fetch(JSONrentals)
.then((response) => response.json())
.then((jsObject) => {
  
  let current = jsObject.rentals[0].type;
  console.log(current);
    
  document.getElementById('data').innerHTML = current;
});