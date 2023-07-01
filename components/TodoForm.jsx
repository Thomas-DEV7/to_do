import React, { useState } from 'react'
import '../src/App.css'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value, category);
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");

    }
    return <div>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Digite o titulo'
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            >
                <option value="">Selecione uma categoria</option>
                <option value="trabalho">Trabalho</option>
                <option value="pessoal">Pessoal</option>
                <option value="estudos">Estudos</option>
            </select>
            <button>Criar tarefa</button>
        </form>
    </div>

}

export default TodoForm