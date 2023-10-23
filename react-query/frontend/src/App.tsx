import './App.css';
import logo from './logo.svg';
import { useRandomColor } from './hooks/colors.hooks';

function App() {
  const { data, isLoading, isError, error } = useRandomColor();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>NER React-Query Learning Session</p>
        <a className="App-link" href="https://finishlinebyner.com" target="_blank" rel="noopener noreferrer">
          Check Out Finishline!
        </a>
        <p>{isLoading ? 'Loading' : data}</p>
      </header>
    </div>
  );
}

export default App;
