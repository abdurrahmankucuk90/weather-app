// import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";
import "./card.scss";

const Card = ({ weather, countryUrl}) => {
 
  

  


  // const {temp, feels_like, humidity} = weather.main
  // console.log(flag);

  return (
    <div className="card" key={weather.id}>
      <h1> {weather.name} <img src={countryUrl} style={{"width": "50px"}} alt="" /> </h1>
   
      <div className="info">
        <h6>Temp: {weather.main?.temp}</h6>
        <h6>Feel like: {weather.main?.feels_like}</h6>
        <h6>Humidity: {weather.main?.humidity}</h6>
        <h6>Wind speed: {weather.wind?.speed}</h6>
        <h6 className="weatherD">Weather: {weather?.weather[0].description.toUpperCase()}</h6>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
