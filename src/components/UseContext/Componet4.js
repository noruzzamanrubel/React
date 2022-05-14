import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Componet4 = () => {
  const test = useContext(UserContext);
  const { id, name, text } = test;
  return (
    <>
      <h4>{text}</h4>
      <p> ID From Component 4: {id}</p>
      <p>Name From Component 4: {name}</p>
    </>
  )
}

export default Componet4