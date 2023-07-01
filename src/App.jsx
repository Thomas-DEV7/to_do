import { React, useState } from 'react'
import './App.css'
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

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
  const addTodo = (text, category) => {
    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false
    },
    ];
    setTodos(newTodos);
  }
  return <div className="app">
    <h1>Lista de tarefas</h1>
    {todos.map((todo) => (
      <div className="todo">
        <Todo key={todo.id} todo={todo} />
      </div>

    ))}
    <TodoForm addTodo={addTodo} />
  </div>
}
// 18:03

export default App
