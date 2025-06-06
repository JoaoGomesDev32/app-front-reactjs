import { useState } from "react";
import "./App.css";
// import Header from "./Header";

function App(props) {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("João");
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const [obj, setObj] = useState({ nome: "João", idade: 35 });

  return (
    <div>
      {numeros.map(function (val) {
        return <p>{val}</p>;
      })}
    </div>
  );
}

export default App;
