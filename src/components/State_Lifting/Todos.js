import React from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo key={uuidv4()} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
