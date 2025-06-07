import { useState, useEffect } from "react";

export default function App(props) {
  const [hora, setHora] = useState(13);
  const [minuto, setMinuto] = useState(50);
  const [segundo, setSegundo] = useState(55);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundo(segundo + 1);
      if (segundo > 59) {
        setSegundo(0);
        setMinuto(minuto + 1);
        if (minuto > 59) {
          setMinuto(0);
          setHora(hora + 1);
          if (hora > 23) {
            setHora(0);
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h2 style={{ color: "red", textAlign: "center" }}>
        {hora}:{minuto}:{segundo}
      </h2>
    </div>
  );
}
