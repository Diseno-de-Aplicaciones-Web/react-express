import "./index.css"
import { useEffect, useState } from "react";
import AmosarTarefas from "./components/AmosarTarefas";

function App() {

  const [tarefas, setDatos] = useState([])

  useEffect(
    obterTareasActualizadas,
    []
  )

  function obterTareasActualizadas(){
    fetch("http://localhost:8000/tarefa/").then(reaccionParaResposta)
  }

  function reaccionParaResposta(resposta){
    resposta.json().then(reaccionParaNovosDatos)
  }

  function reaccionParaNovosDatos(novosDatos){
    setDatos(novosDatos)
  }

  return (
    <main>
      <h1>React - Express</h1>
      <AmosarTarefas tarefas={tarefas}/>
    </main>
  );

}

export default App;
