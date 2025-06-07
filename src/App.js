import { useState, useEffect } from "react";

export default function App(props) {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Joao");

  function callAlert() {}

  useEffect(() => {
    callAlert();
  }, []);
  return (
    <div>
      {nome === "João" ? (
        <div>
          <p>{nome}</p>
        </div>
      ) : (
        <div>
          <p style={{ color: "red" }}>{nome}</p>
        </div>
      )}
    </div>
  );
}
