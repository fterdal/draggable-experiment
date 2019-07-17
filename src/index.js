import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import DragContainer from "./DragContainer";

function App() {
  return (
    <>
      <div className="App">
        <h1>Get Dragged</h1>
      </div>
      <DragContainer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
