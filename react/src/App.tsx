import React, { useState } from 'react';
import './App.css';
import nerLogo from './NER-Logo-App-Icon.svg';
import logo from './logo.svg';

function App() {
  const [original, setOriginal] = useState(false);

  const [count, setCount] = useState(0);

  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  const onCountButtonClicked = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sharon Yang</h1>
        {original ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <img src={nerLogo} className="App-logo" alt="logo" />
        )}
        <p>NER React Learning Session</p>
        <a className="App-link" href="https://finishlinebyner.com" target="_blank" rel="noopener noreferrer">
          Check Out Finishline!
        </a>
        <button onClick={onSwitchClicked} className={'App-logo-button'}>
          Switch Logo
        </button>

        <button onClick={onCountButtonClicked} className={'App-logo-button'}>
          Add to count!
        </button>
        <div>
          You've clicked the button {count} time{count !== 1 && <span>s</span>}!
        </div>
      </header>
    </div>
  );
}

export default App;
