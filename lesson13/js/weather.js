/**
 * CONTENT: Cozumel data from JSON files, weather API
 * Cozumel ID: 3530103
 * lon: -86.945831
 * lat: 20.508329 
 * 
 * 	(1) - Weather API data
 *		(1.a) - Summary weather data
 * 		(1.b) - Forecast weather data
 */

 /* (1) Weather API data */
const apiURLweather = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=f4051f9ae5c7a4eb58c335ed524c93c6';

// (1.a) SUMMARY WEATHER
fetch(apiURLweather)
.then((response) => response.json())
.then((jsObject) => {
  
  let current = jsObject.weather[0].description;
  let temperature = jsObject.main.temp_max;
  let humidity = jsObject.main.humidity;
  
  document.getElementById('weather-cozumel-1').innerHTML = current;
  document.getElementById('weather-cozumel-2').innerHTML = temperature;
  document.getElementById('weather-cozumel-3').innerHTML = humidity;
});