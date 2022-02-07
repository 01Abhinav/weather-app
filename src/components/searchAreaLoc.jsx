import { useState } from "react";
import { getWeatherFromLocation } from "../services/weatherService";
import axios from "axios";

const SearchAreaLoc = (props) => {
  const [loc, setLoc] = useState("");
  const { setInfo } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = await getWeatherFromLocation(loc);
    setInfo(info);
  };

  const setCurrentLoc = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(
          `https://us1.locationiq.com/v1/reverse.php?key=pk.bdcb7e53e421a0aac6d3409f8b64fed7&lat=${latitude}&lon=${longitude}&format=json`
        )
        .then((res) => setLoc(res.data.address.city))
        .catch((err) => console.log(err));
    });
  };
  return (
    <>
      <form>
        <div class="input-group m-2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              City Name
            </span>
          </div>
          <input
            type="text"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
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
    </>
  );
};

export default SearchAreaLoc;
