import { React, useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar tela X",
      category: "trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Criar Pagina de vendas X",
      category: "trabalho",
      isCompleted: false
    },
    {
      id: 3,
      text: "Criar tela de jogos na venda do site X",
      category: "trabalho",
      isCompleted: false
    }
  ]);
  return <div className="app">
    <h1>Lista de tarefas</h1>
    {todos.map((todo) => (
      <div className="todo">
        <div className="content">
          <p>{todo.text}</p>
        </div>
        <button>Completar</button>
        <button>X</button>
      </div>
      

    ))}
  </div>
}
// 18:03

export default App
