import React from "react";

type WeatherProps = {
  data: WeatherData;
};
const Weather: React.FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  return (
    <div className="container">
      <h1 className="title">
        {data.name} - {data.sys.country}
        <div className="level">
          <p className="heading">{data.weather[0].description}</p>
          <p className="title">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt="weather icon"
            />
          </p>
        </div>
        <div className="tempContainer">
          <p className="heading">temp</p>
          <div className="title">
            <p>{data.main.temp} K</p>
            <p>
              {fahrenheit} <sup>&#8457;</sup>
            </p>
            <p>
              {celsius} <sup>&#8451;</sup>
            </p>
          </div>
        </div>
        <div className="humidityContainer">
          <p className="heading">humidity</p>
          <p className="title">{data.main.humidity}</p>
        </div>
        <div className="pressureContainer">
          <p className="heading">pressure</p>
          <p className="title">{data.main.pressure}</p>
        </div>
        <div className="windContainer">
          <p className="heading">wind</p>
          <p className="title">{data.wind.speed} m/s</p>
        </div>
      </h1>
    </div>
  );
};

export default Weather;
