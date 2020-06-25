import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  setCount(2);
  return (
    <div className="App">
      <h1>Hello World {count}</h1>
    </div>
  );
}

export default App;
