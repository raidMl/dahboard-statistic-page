import logo from './logo.svg';
import './App.css';
import Statistic from './components/statistic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Statistic/>
        <p>
categories of persons        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
