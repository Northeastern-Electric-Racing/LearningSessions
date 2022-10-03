import React, { useState } from 'react';
import './App.css';
import nerLogo from './NER-Logo-App-Icon.svg';

function App() {
  const [clicker, setClickerCounter] = useState(0);

  const onSwitchClicked = () => {
    setClickerCounter(clicker + 1);
  }

  return (
    <div className="App">
      <header>
        Jared Lyon's Branch
      </header>
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
        <button onClick={onSwitchClicked} className={"Clicker-Counter"}>
          Clicker Counter!
        </button>
        <p> { clicker } </p>
      </header>
    </div>
  );
}

export default App;