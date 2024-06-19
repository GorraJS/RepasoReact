import logo from './logo.svg';
import './App.css';
import Carta from'./components/Carta'

//nota = {id:,texto:,color}
//[nota1,nota2,nota3,nota4]
//[{},{},{},...]
let notas = [
  { id: 1, texto: "Texto 1", color: "blue" },
  { id: 2, texto: "Texto 2", color: "green" },
  { id: 3, texto: "Texto 3", color: "red" },
  { id: 4, texto: "Texto 4", color: "blue" },
  { id: 5, texto: "Texto 5", color: "green" },
  { id: 6, texto: "Texto 6", color: "red" },
  { id: 7, texto: "Texto 7", color: "blue" },
  { id: 8, texto: "Texto 8", color: "green" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 10, texto: "Texto 10", color: "blue" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" },
  { id: 9, texto: "Texto 9", color: "red" }
];


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