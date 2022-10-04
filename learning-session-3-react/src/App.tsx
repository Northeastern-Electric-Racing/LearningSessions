import React, { useState } from 'react';
import './App.css';
import chezyLogo from './254.svg';

function App() {
  const [clicker, setClickerCounter] = useState(0);

  const onSwitchClicked = () => {
    setClickerCounter(clicker + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={chezyLogo} className="App-logo" alt="logo" />
        <p>NER React Learning Session</p>
        <h1>
        Jared Lyon's Branch
        </h1>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
        <button onClick={onSwitchClicked} className={"Clicker-Counter"}>
          do not click me.
        </button>
        {clicker > 0 ? (
          <p> you fool, you've clicked me!! - counter: {clicker} </p>
        ) : (
          <p> Don't do it. </p>
        )}
      </header>
    </div>
  );
}

export default App;