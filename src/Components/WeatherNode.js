import React, { useState, useEffect } from 'react';
import axios from 'axios';


function WeatherNode() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');

function handleinputchange(event){
   setCity(event.target.value)
}


  function checkweather(){
    axios.get(`http://localhost:4000/weather/${city}`)
      .then(response => {
        const data = response.data;
        console.log(data)
        setTemperature(data.main.temp);
        setDescription(data.weather[0].description);
      })
      .catch(error => console.error(error));
}
  return (
    <div className='nodeweather'>
        <input type="text" value={city} onChange={handleinputchange}></input><button onClick={checkweather}>Check</button>
      <h1>Weather in {city}</h1>
      <p>Temperature: {temperature} K</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default WeatherNode;
