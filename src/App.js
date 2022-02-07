import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import SearchAreaLoc from "./components/searchAreaLoc";
import SearchArea from "./components/searchArea";

import CardContainer from "./components/cardContainer";

const axios = require("axios");
function App() {
  const [info, setInfo] = useState(null);
  const [way, setWay] = useState(false);
  // const [time, setTime] = useState(new Date());

  console.log(way);
  return (
    <div className="App row">
      <div className="col-4 mt-4">
        <div className="row m-2">
          <div className="col-2">
            <label className="switch">
              <input
                type="checkbox"
                checked={way}
                onChange={(e) => setWay(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="col">
            <h6>
              {way
                ? "Toggle to search by location name"
                : "Toggle to search by coordinates"}
            </h6>
          </div>
        </div>
        <div className="row m-2">
          {way ? (
            <SearchArea setInfo={setInfo} />
          ) : (
            <SearchAreaLoc setInfo={setInfo} />
          )}
        </div>
        <div className="row m-2 display-1">{info?.name}</div>
        <div className="row m-2 display-6">
          {Math.round(info?.main.temp - 273) + " "}
        </div>
      </div>
      <div className="col-8">{info && <CardContainer info={info} />}</div>
    </div>
  );
}

export default App;
