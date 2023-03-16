import { useState } from "react"

function EngadirTarefa({funcionActualizarTarefas}) {

    const [descripcion, setDescripcion] = useState("")

    function manejadorInput(evento){
        setDescripcion(evento.target.value)
    }

    function manejadorClick(){
        fetch(
            "http://localhost:8000/tarefa/",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        id: Date.now(),
                        descripcion: descripcion,
                        rematada: false,
                    }
                ),
            }
        )
        .then(reaccionRespostaAPI)
        .catch(reaccionErrorConexion)
    }

    function reaccionRespostaAPI(resposta) {
        if (resposta.ok) {
            setDescripcion("")
            funcionActualizarTarefas()
        } else {
            alert(`A petición foi rexeitada cun código ${resposta.status}`)
        }
    }

    function reaccionErrorConexion(error) {
        alert("Non foi posible conectar coa nube")
    }

    return (
        <>
        <label>
            Nueva tarea
            <input type="text" value={descripcion} onInput={manejadorInput}/>
        </label>
        <button onClick={manejadorClick}>Añadir</button>
        </>
    )

}

export default EngadirTarefa