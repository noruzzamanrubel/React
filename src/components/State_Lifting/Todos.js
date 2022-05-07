import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from "uuid";

const Todos = (props) => {
  return (
    <section>
      {props.todos.map((todo) =>
        <Todo key={uuidv4()} todo={todo} onRemoveTodo={props.onRemoveTodo} id={todo.id} />
      )}
    </section>
  )
}

export default Todos
