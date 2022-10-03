import React, { useState } from 'react';
import './App.css';
import nerLogo from './NER-Logo-App-Icon.svg';
import logo from './logo.svg'

function App() {

  const [clicks, setClicks] = useState(0);
  const [original, setOriginal] = useState(false);

  const countClicks = () => {
    setClicks(clicks + 1);
    setOriginal(!original)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ryan Howe</h1>
        <h1>{clicks}</h1>
        {original ? <img src={logo} className="App-logo" alt="logo" /> : <img src={nerLogo} className="App-logo" alt="logo" />}
        <p>NER React Learning Session</p>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
      </header>
      <button onClick={countClicks}>add a click</button>
    </div>
  );
}

export default App;
