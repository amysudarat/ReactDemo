import React from "react";
import ReactDOM from "react-dom";
import CounterButton from "./CounterButton.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CounterButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
