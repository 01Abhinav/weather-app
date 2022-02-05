import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const axios = require("axios");

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const API_Key = "bf7f75d820cea9ae68d1292fc1c1c8e4";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`;

  const setCurrentLoc = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log(position);
    });
    console.log(lon);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          placeholder="latitude"
        ></input>
        <input
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          placeholder="longitude"
        ></input>
        <button onClick={setCurrentLoc}>get current loc</button>
        <button type="submit" onClick={onSubmit}>
          {" "}
          submit{" "}
        </button>
      </form>
    </div>
  );
}

export default App;
