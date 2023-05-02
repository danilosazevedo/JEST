import {useState} from "react"

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefasTemp, setTarefasTemp] = useState('')

  function cadastrarTarefa(){
    setTarefas([...tarefas,tarefasTemp])
    setTarefasTemp('')
  }

  return (
    <div className="App">
    <input data-testid="campotarefa" type="text" value={tarefasTemp} onChange={evento => setTarefasTemp(evento.target.value)}/>
      <button data-testid="btn-cadastrar" onClick={cadastrarTarefa} type="button">Cadastrar</button>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
