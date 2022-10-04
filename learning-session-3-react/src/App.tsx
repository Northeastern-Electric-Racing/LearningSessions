import React, { useState } from "react";
import "./App.css";
import nerLogo from "./NER-Logo-App-Icon.svg";
import logo from "./logo.svg";



function App() {
  const [original, setOriginal] = useState(false);
  const [num, setNum] = useState(0);
  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  const increment = () => {
    setNum(num + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Willem Shak</h1>
        {original ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <img src={nerLogo} className="App-logo" alt="logo" />
        )}
        <p>NER React Learning Session</p>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
        <button onClick={onSwitchClicked} className={"App-logo-button"}>
          Switch Logo
        </button>
        <button onClick={increment} className={"Increment-button"}>Increment</button>
        <body>{num}</body>
      </header>
    </div>
  );
}

export default App;
