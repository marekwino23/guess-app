import './App.css';
import Words from './components/Words'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game</h1>
      </header>
      <div className="box">
        <Words></Words>
      </div>
    </div>
  );
}

export default App;
