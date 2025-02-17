import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import PropTypes from "prop-types";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      updateInfo(result);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  let handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div>
      {error && <p className="Error">Place Not Found!</p>}
      <TextField
        className="SearchBox"
        label="City"
        variant="outlined"
        value={city}
        onChange={handleChange}
        error={error}
        // helperText={error ? "Error fetching weather data" : ""}
        required
      />

      <Button variant="contained" color="primary" onClick={getWeatherInfo}>
        Search
      </Button>
    </div>
  );
}
SearchBox.propTypes = {
  updateInfo: PropTypes.func.isRequired,
};

export default SearchBox;
