import React, { useState, useEffect } from 'react'

const DataFetch = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then((data) => {
                setTodos(data);
            })
    }, []);
    return (
        <div className='text-center'>
            <h1 className='heading'>DataFetch</h1>
            {todos.map((todo) => {
                return (
                    <h4 key={todo.id}>{todo.title}</h4>
                )
            })}
        </div>
    )
}
a
export default DataFetch