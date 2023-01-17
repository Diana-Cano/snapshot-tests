
import './App.css';
import GitHubCard from './Components/GitHubCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GitHubCard/>
        <h2> testing 123</h2>
        <ul>
          <li>test one</li>
          <li>test two</li>
          <li>test three</li>
        </ul>
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
