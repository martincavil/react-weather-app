import './app.scss';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c0670ccf8896f75507e0281fbdc2b22d`;

  const searchLocation = (e) => {
    if(e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        // console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        type="text"
        placeholder='Enter a location' />
      </div>
       <div className="container">

        <div className="top">
          <div className="top-location">
            <div className="location">
              {data.name ? <h2>{data.name}</h2> : null}
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
          </div>
          <div className="desc">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
          {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <span>Fells like</span>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <span>Humidity</span>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed} km/h</p> : null}
            <span>Wind speed</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
