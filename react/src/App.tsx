import React, { useState } from "react";
import "./App.css";
import nerLogo from "./NER-Logo-App-Icon.svg";
import logo from "./logo.svg";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [original, setOriginal] = useState(false);
  const [clicks, setClicks] = useState(0);

  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  const increment = () => {
    setClicks(clicks+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <header>Qihong Wu</header>
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
        <button onClick={increment}>
          click: {clicks}  
        </button>
      
      </header>
    </div>
  );
}

export default App;
