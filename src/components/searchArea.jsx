import React, { useState } from "react";
const axios = require("axios");

const SearchArea = (props) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const { setInfo } = props;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;

  const setCurrentLoc = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log(position);
    });
    console.log(lon);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(url);
      setInfo(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
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
    </>
  );
};

export default SearchArea;
