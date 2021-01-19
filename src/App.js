import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [buyPrice, setBuyPrice] = useState("");

  return (
    <div className="App">
      <input placeholder="pls enter the stock price when ou bought it"></input>
    </div>
  );
}
