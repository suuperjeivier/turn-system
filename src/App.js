
import './App.css';
import Table from './modules/queue';
import NewItem from './modules/new_item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>HOLA</h1>
      <Table number={4} />
      <NewItem />
      </header>
    </div>
  );
}

export default App;
