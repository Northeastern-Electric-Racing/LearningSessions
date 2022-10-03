import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import nerLogo from './NER-Logo-App-Icon.svg';

function App() {
  const[original, setOriginal] = useState(false);

  const onSwitchClicked = () => {
    setOriginal(!original);
  };

  return (
    <div className="App">
      <header className="App-header">
        {original ? (<img src={logo} className="App-logo" alt="logo" />) :
        (<img src={nerLogo} className="App-logo" alt="logo" />)}
        <p>NER React Learning Session</p>
        <a
          className="App-link"
          href="https://finishlinebyner.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out Finishline!
        </a>
        <button onClick={onSwitchClicked} className="App-logo-button">
        {"test"}
        </button>
      </header>
    </div>
  );
}

export default App;
