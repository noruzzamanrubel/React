import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos([...todos, { ...todo, id: uuidv4() }]);
  }
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className='home'>
      <h1>Basic Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home
