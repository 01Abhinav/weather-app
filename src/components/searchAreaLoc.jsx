import React, { useState } from "react";
const axios = require("axios");

const SearchAreaLoc = (props) => {
  const [loc, setLoc] = useState("");
  const { setInfo } = props;
  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${process.env.REACT_APP_API_KEY}`;

  const onSubmitName = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(url2);
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
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          placeholder="Location Name"
        ></input>
        <button type="submit" onClick={onSubmitName}>
          {" "}
          submit{" "}
        </button>
      </form>
    </>
  );
};

export default SearchAreaLoc;
