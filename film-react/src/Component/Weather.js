import React, { useState } from 'react'
import Axios from "axios";

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const rechercherLocation = (event) => {
    if (event.key === 'Enter') {
      Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=759f85cdbb4482f6f9df2a45ed588283`)
      .then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className='App'>
    <div className="borderApiWeather">
    <h1 className='text'>Testé l'api openweather svp</h1>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={rechercherLocation}
          placeholder='Entrez une ville'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className='text'>{data.name}</p>
          </div>
          <div className="temp text">
            {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
          </div>
        {data.name !== undefined &&
            <div className="Humidité">
              {data.main ? <p className='bold text'>{data.main.humidity}% d'humidité</p> : null}
          </div>
        }
        </div>
      </div>
    </div>
    </div>

  );
}

export default Weather;
