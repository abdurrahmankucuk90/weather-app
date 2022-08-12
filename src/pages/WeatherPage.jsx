import { useState } from "react";
import Card from "../components/Card";
import "./weatherApp.scss";

const WeatherPage = () => {

    const [weather, setWeather] = useState("")

  return (
    <div className="container">
      <div className="inputDiv">
        <form >
          <input type="search" name="search" id="searchBar" />
          <button className="searchButton">Search</button>
        </form>
      </div>
      <div className="display">
        <Card/>
      </div>
    </div>
  );
};

export default WeatherPage;
