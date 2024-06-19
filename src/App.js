import './App.css';
import Carta from './Components/Carta'

//nota = {id:,texto:,color}
//[nota1,nota2,nota3,nota4]
//[{},{},{},...]
let notas = [
  { id: 1, texto: "Texto 1", color: "blue" },
  { id: 2, texto: "Texto 2", color: "green" },
  { id: 3, texto: "Texto 3", color: "red" },

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {notas.map(nota => <Carta id={nota.id} color={nota.color} texto={nota.texto}/>)}
      </header>
    </div>
  );
}

export default App;