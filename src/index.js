import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Draggable } from "./Draggable";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello Finn</h1>
      </div>
      <div className="draggable-container">
        <Draggable />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
