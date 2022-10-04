import React, { useState } from "react";
import "./App.css";
import nerLogo from "./NER-Logo-App-Icon.svg";
import logo from "./logo.svg";

function App() {
  const [original, setOriginal] = useState(false);

  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  
  const [count, setCount] =  useState(0);
  const numClicks = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        {original ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <img src={nerLogo} className="App-logo" alt="logo" />
        )}
        <header>
          Ethan Kong
        </header>
        <p>NER React Learning Session</p>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
        {
          count
        }
        <button onClick={onSwitchClicked} className={"App-logo-button"}>
          Switch Logo
        </button>
        <button onClick={numClicks} className={"App-logo-button"}>
          Count Clicks
        </button>
      </header>
    </div>
  );
}

export default App;
