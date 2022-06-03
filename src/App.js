
import './App.css';


import { Link } from "react-router-dom";



function App() {
  

  return (
    <div className="App">
       <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/nuevo">Nuevo turno</Link> |{" "}
        <Link to="/turnos ">Turnos</Link>
      </nav>
      <header className="App-header">
      <h1>HOLA</h1>
      
      </header>
    </div>
  );
}

export default App;
