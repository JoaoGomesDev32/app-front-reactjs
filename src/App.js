import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h2>{props.texto.chamada1}</h2>
      <h2>{props.texto.chamada2}</h2>
    </div>
  );
}

export default App;
