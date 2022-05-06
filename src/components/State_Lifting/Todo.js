import React from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = (props) => {
  return (
    <div>
      <p key={uuidv4()}>{props.todo}</p>
    </div>
  );
};

export default Todo;
