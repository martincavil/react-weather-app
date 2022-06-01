import './app.scss';
import axios from 'axios';
import { useState } from 'react';

function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=c0670ccf8896f75507e0281fbdc2b22d';
  return (
    <div className="app">
       <div className="container">
        <div className="top">
          <div className="location">
            <span>Paris</span>
            <div className="temp">
              <span>28°C</span>
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
            <span>12km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
