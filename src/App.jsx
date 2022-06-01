import './app.scss';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c0670ccf8896f75507e0281fbdc2b22d';
  return (
    <div className="app">
       <div className="container">

        <div className="top">
          <div className="location">
            <h2>Paris</h2>
            <div className="temp">
              <h1>28°C</h1>
            </div>
            <div className="desc">
              <p>Sunny</p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>30°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12km/h</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
