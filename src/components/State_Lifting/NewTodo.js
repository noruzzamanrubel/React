import React, { useState } from 'react';

const NewTodo = (props) => {

  const [todo, setTodo] = useState({
    title: '',
    desc: ''
  })
  const { title, desc } = todo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.onAddTodo(todo)
    setTodo({
      title: '',
      desc: '',
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Title: </label>
        <input type="text" name="title" id="title" onChange={handleChange} value={title} />
      </div>
      <div className="form-field">
        <label>Description: </label>
        <input type="textarea" name="desc" id="desc" onChange={handleChange} value={desc} />
      </div>
      <div>
        <button type="submit">
          Add Title
        </button>
      </div>
    </form>
  )
}

export default NewTodo