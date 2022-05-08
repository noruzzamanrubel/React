import React, { useState, useEffect } from 'react'

const ErrorMessage = "Data fatching not successfull. Please check your api url";

const DataFetch = () => {

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/zd')
            .then((response) => {
                if (!response.ok) {
                    throw Error({ ErrorMessage });
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setTodos(data);
            })
            .catch((error) => {
                setError(error.message);
            }
            );
    }, []);

    const todolist = todos.map((todo) => {
        return (
            <p key={todo.id}>{todo.title}</p>
        )
    })

    return (
        <div className='text-center'>
            <div>
                <h1 className='heading'>DataFetch by UseEffect</h1>
            </div>
            {error && <h4>{ErrorMessage}</h4>}
            {todolist}
        </div>
    )
}
export default DataFetch