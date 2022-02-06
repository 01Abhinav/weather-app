import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import SearchAreaLoc from "./components/searchAreaLoc";
import SearchArea from "./components/searchArea";

const axios = require("axios");
function App() {
  const [info, setInfo] = useState({});

  return (
    <div className="App row">
      <div className="col-4">
        <SearchArea setInfo={setInfo} />
        <SearchAreaLoc setInfo={setInfo} />
      </div>
      <div className="col-8">{info?.main?.temp}</div>
    </div>
  );
}

export default App;
