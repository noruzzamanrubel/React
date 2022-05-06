import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>New Todo: </label>
      <input
        type="text"
        name="name"
        value={todo}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
