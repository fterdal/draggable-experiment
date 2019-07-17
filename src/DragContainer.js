import React from "react";

import { Draggable } from "./Draggable";

import "./DragContainer.css";
function DragContainer() {
  return (
    <div className="draggable-container">
      <Draggable />
    </div>
  );
}

export default DragContainer;
