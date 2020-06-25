import React, { useState } from "react";
import Message from "./Message.js";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [isMoring, setMoring] = useState(true);

  return (
    <div className={`box ${isMoring ? "daylight" : ""}`}>
      <Message counter={count} />
      <button onClick={() => setCount(++count)}> Update Counter </button>

      <hr />
      <h3>Have a Good {isMoring ? "Morning" : "Night"} :) </h3>
      <button onClick={() => setMoring(!isMoring)}> Change Day Light </button>
    </div>
  );
}

export default App;
