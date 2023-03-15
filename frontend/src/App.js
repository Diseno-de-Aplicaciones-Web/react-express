import "./index.css"
import { useEffect, useState } from "react";

function App() {

  const [datos, setDatos] = useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:8000/tarefa/").then(reaccionParaResposta)
    },
    []
  )

  function reaccionParaResposta(resposta){
    resposta.json().then(reaccionParaNovosDatos)
  }

  function reaccionParaNovosDatos(novosDatos){
    setDatos(novosDatos)
  }

  return (
    <main>
      <h1>React - Express</h1>
      {
        datos.map(
          tarefa=><p key={tarefa.id}>{tarefa.descripcion} <input type="checkbox" checked={tarefa.rematada}/></p>
        )
      }
    </main>
  );

}

export default App;
