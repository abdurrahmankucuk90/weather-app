import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./weatherApp.scss";

const WeatherPage = () => {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Bursa");

  const api = {
    api_key: process.env.REACT_APP_WEATER_API,
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=
    ${query}&units=metric&appid=${api.api_key}`;

  const getApi = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value.toUpperCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getApi();
    console.log(weather);
  };

  useEffect(() => {
    // getApi();
  }, []);

  return (
    <div className="container">
      <div className="inputDiv">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            id="searchBar"
            onChange={handleChange}
          />
          <button className="searchButton">Search</button>
        </form>
      </div>
      {weather && <Card weather={weather} />}
    </div>
  );
};

export default WeatherPage;
