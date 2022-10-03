import React from 'react';
import './App.css';
import nerLogo from './NER-Logo-App-Icon.svg';

function App() {
  return (
    <div className="App">
      <h1> Micah Pacis</h1>
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
        <button>click to keep track of count</button>
      </header>
    </div>
  );
}

export default App;
