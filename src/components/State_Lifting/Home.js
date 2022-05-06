import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
const dummyData = ["Todo 1", "Todo 2", "Todo 3"];

const Home = () => {
  const [todos, setTodos] = useState(dummyData);
  const handleNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
