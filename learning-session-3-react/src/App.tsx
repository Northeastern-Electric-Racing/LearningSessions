import React, { useState } from 'react';
import './App.css';
import chezyLogo from './254.svg';

function App() {
  const [clicker, setClickerCounter] = useState(0);

  const onSwitchClicked = () => {
    setClickerCounter(clicker + 1);
  }

  var btmMsg = "";
  if (clicker == 0) {
    btmMsg = "don't do it.";
  } else if (clicker == 1) {
    btmMsg = "you fool. (counter: " + clicker + ")";
  } else if (clicker == 2) {
    btmMsg = "you absolute goon. (counter: " + clicker + ")";
  } else if (clicker > 2) {
    btmMsg = "you are out of control. (counter: " + clicker + ")";
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
        <p> { btmMsg } </p>
      </header>
    </div>
  );
}

export default App;