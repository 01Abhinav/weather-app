import { useState } from "react";
import { getWeatherFromCoords } from "../services/weatherService";
//import { setCurrentLocCoords } from "./../services/currentLocationService";

const SearchArea = (props) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const { setInfo } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = await getWeatherFromCoords(lat, lon);
    setInfo(info);
  };

  const setCurrentLoc = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLon(longitude);
    });
  };

  return (
    <form>
      <div class="input-group m-2">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">
            Lat & Long
          </span>
        </div>
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          class="form-control"
        />
        <input
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          class="form-control"
        />
      </div>

      <button className="btn btn-dark m-2" onClick={setCurrentLoc}>
        Get Current Location
      </button>
      <button
        className="btn btn-success m-2"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default SearchArea;
