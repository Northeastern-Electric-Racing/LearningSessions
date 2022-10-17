import React, { useState } from "react";
import "./App.css";
import nerLogo from "./NER-Logo-App-Icon.svg";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  const multFunc = () => {
    increase();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={nerLogo} className="App-logo" alt="logo" />
        <p>NER React Learning Session</p>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
        <button onClick={multFunc} className={"App-logo-button"}>
          {counter}
        </button>
      </header>
    </div>
  );
}

export default App;
