import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import useCat from "./hooks/useCat";

function App() {
  const { catID, catPic, switchCat, loading } = useCat();
  console.log("APP", loading, catPic);
  return (
    <div className="App">
      <h1>
        CatID #{catID || "..."} |{" "}
        <input type="button" value="Next" onClick={switchCat} />
      </h1>
      <div className="picContainer">
        {loading && (
          <img
            src="https://miro.medium.com/max/1600/1*l-lCzn_E6dTqbYRKOC8lHw.gif"
            alt="loading"
          />
        )}
        {!loading && <img src={catPic} alt={catID} />}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
