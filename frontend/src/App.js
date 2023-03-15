import "./index.css"
import { useEffect, useState } from "react";

function App() {

  const [datos, setDatos] = useState([])
  const [listaTarefas, setListaTarefas] = useState([])
  const [procesoActual, setProcesoActual] = useState("Iniciando aplicación")

  useEffect(
    actualizaDatos,
    []
  )

  useEffect(
    ()=>{
      const novaLista = datos.map(HTMLparaTarefa)
      setListaTarefas(novaLista)
    },
    [datos]
  )

  function actualizaDatos(){
    setProcesoActual("Obtendo a lista de tarefas")
    fetch("http://localhost:8000/tarefa/")
      .then(reaccionParaResposta)
      .catch(reaccionParaErrorAccedendoDatos)
  }

  function reaccionParaResposta(resposta){
    resposta.json().then(reaccionParaNovosDatos)
  }

  function reaccionParaNovosDatos(novosDatos){
    setDatos(novosDatos)
  }

  function reaccionParaErrorAccedendoDatos(error){
    setDatos([])
    setProcesoActual("Non foi posible obter as tarefas. Reintentando nuns segundos.")
    setTimeout(actualizaDatos,2000)
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
      { datos.length === 0 && <p>{procesoActual}</p>}
      { datos.length > 0 && listaTarefas}
    </main>
  );

}

export default App;
