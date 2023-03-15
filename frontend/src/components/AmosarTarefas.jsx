function AmosarTarefas({tarefas}) {
    return (
        <ol>
        {
            tarefas.map(
            tarefa=><li key={tarefa.id}>{tarefa.descripcion} <input type="checkbox" checked={tarefa.rematada}/></li>
            )
        }
        </ol>
    );
}

export default AmosarTarefas