import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [buyPrice, setBuyPrice] = useState("");
  function priceChangeHandler(event) {
    var bPrice = event.target.value;
    setBuyPrice(bPrice);
  }

  return (
    <div className="App">
      <input
        onChange={() => priceChangeHandler(event)}
        placeholder="pls enter the stock price when ou bought it"
      ></input>
    </div>
  );
}
