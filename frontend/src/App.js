import "./index.css"
import { useEffect, useState } from "react";
import AmosarTarefas from "./components/AmosarTarefas";
import EngadirTarefa from "./components/EngadirTarefa";

function App() {

  const [tarefas, setDatos] = useState([])

  useEffect(
    obterTarefasActualizadas,
    []
  )

  function obterTarefasActualizadas(){
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
      <EngadirTarefa funcionActualizarTarefas={obterTarefasActualizadas}/>
      <AmosarTarefas tarefas={tarefas}/>
    </main>
  );

}

export default App;
