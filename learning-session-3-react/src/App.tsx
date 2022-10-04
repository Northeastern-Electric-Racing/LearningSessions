import React, { useState } from "react";
import "./App.css";
import nerLogo from "./NER-Logo-App-Icon.svg";
import logo from "./logo.svg";

function App() {
  const [original, setOriginal] = useState(false);

  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  const [count, setCount] = useState(999999999999);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <header>
            <h1>
              Ryan Cheung
            </h1>
          </header>
        </div>
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
        <p>
        {
          count
        }
        </p>
        <button onClick={onButtonClick} className={"App-counter"}>
          Click counter
        </button>
      </header>
    </div>
  );
}

export default App;
