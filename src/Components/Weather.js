import React from "react";

function Weather() {

      function getWeather() {
        let place = document.getElementById("place")
        console.log(place)
        const apiKey = 'e07d16d4e233e9ac8fc269cf1b56ccf3';
        const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${place.value}`;
      
        fetch(url)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              
    const locationEl = document.getElementById('location');
    const weatherEl = document.getElementById('weather');
    let celsius = data.main.temp-273.15
            locationEl.innerHTML = `${data.name}, ${data.sys.country}`;
            weatherEl.innerHTML = `${Math.round(celsius)}°C ${data.weather[0].description}`;
          })
          .catch(error => {
            
    const locationEl = document.getElementById('location');
    const weatherEl = document.getElementById('weather');
    
            console.error('Error:', error);
            locationEl.innerHTML = "Unable to retrieve location and weather data.";
          });
      }
    return(
      <div className="weatherbody">
        <div className="container">
          <input type="text" id="place"></input> <button onClick={getWeather}>Search</button>
   
        <h1>Weather App</h1>
        <p>Your current location:</p>
        <div id="location"></div>
        <p>Current weather:</p>
        <div id="weather"></div>
          </div>
      </div>
    );
}


export default Weather;