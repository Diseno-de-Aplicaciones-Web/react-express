import "./index.css"
import { useEffect, useState } from "react";

function App() {

  const [datos, setDatos] = useState([])
  const [listaTarefas, setListaTarefas] = useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:8000/tarefa/").then(reaccionParaResposta)
    },
    []
  )

  useEffect(
    ()=>{
      const novaLista = datos.map(HTMLparaTarefa)
      setListaTarefas(novaLista)
    },
    [datos]
  )

  function reaccionParaResposta(resposta){
    resposta.json().then(reaccionParaNovosDatos)
  }

  function reaccionParaNovosDatos(novosDatos){
    setDatos(novosDatos)
  }

  function HTMLparaTarefa(tarefa){
    return(
      <label key={tarefa.id}>
        {tarefa.descripcion}
        <input type="checkbox" checked={tarefa.rematada}/>
      </label>
    )
  }

  return (
    <main>
      <h1>React - Express</h1>
      { datos.length === 0 && <p>Esperando datos...</p>}
      { datos.length > 0 && listaTarefas}
    </main>
  );
  
}

export default App;
