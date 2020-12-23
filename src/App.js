import './App.css';
import TicTacToeGrid from './TicTacToe/TicTacToeGrid'

function App() {
  const refresh = () => {
    window.location.reload()
  }
  return (
    <div className="App">
      <h1>Welcome to TicTacToe Game</h1>
      
      <TicTacToeGrid/>
      <div className="btn">
        <button type="reset" onClick={refresh}>Reset</button>
      </div>
    </div>
  );
}

export default App;
