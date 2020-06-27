const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=f4051f9ae5c7a4eb58c335ed524c93c6';
//const apiURLforecast = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.1&lon=-111.88&exclude=current,minutely,hourly&units=imperial&appid=f4051f9ae5c7a4eb58c335ed524c93c6';
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f4051f9ae5c7a4eb58c335ed524c93c6';

// SUMMARY SECTION
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.table(jsObject);
    //console.log(jsObject);

    const currently = jsObject.weather[0].description;
    const temp_high = jsObject.main.temp_max;
    const windChill = 0.0;
    const humidity = jsObject.main.humidity;
    const windSpeed = jsObject.wind.speed;

    //console.log(currently, temp_high, windchill, humidity, windSpeed)

    if (temp_high < 50 && windSpeed > 3) {
        windChill = 35.74 + 0.6215 * temp_high - 35.75 * windSpeed ** 0.16 + 0.4275 * temp_high * windSpeed ** 0.16;
        windChill = Math.round(windChill * 10) / 10;
        //console.log(windChill);
        windChill_display = windChill + ' &#8457;';
    } else {
        windChill_display = 'N/A';
    }

    document.getElementById('weather-preston-1').innerHTML = currently;
    document.getElementById('weather-preston-2').innerHTML = temp_high;
    document.getElementById('weather-preston-3').innerHTML = windChill_display;
    document.getElementById('weather-preston-4').innerHTML = humidity;
    document.getElementById('weather-preston-5').innerHTML = windSpeed;
  });

// FORECAST SECTION
fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.table(jsObject);
    console.log('TEST');
    console.log(jsObject);
    
    for (let i = 1; i < 6; i++) {
     
      // TEMPERATURE
      //console.log('LOOP: ' + i);
      document.getElementById('forecast-preston-' + i).innerHTML = jsObject.daily[i].temp.eve;
      //console.log('TEMP: ' + jsObject.daily[i].temp.eve);
      
      let imagesrc = 'http://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
      //console.log('IMG jsObject: ' + jsObject.daily[i].weather[0].icon);
      //console.log('imagesrc: ' + imagesrc );
      document.getElementById('forecast-preston-img-' + i).setAttribute('src', imagesrc);


      let desc = jsObject.daily[i].weather[0].description;
      //console.log(desc);
      document.getElementById('forecast-preston-img-' + i).setAttribute('alt', desc);
     
      

    }
  });