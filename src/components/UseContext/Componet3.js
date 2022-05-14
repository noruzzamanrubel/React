import React, {useContext} from 'react'
import Component4 from './Componet4'
import {UserContext} from './UserContext'

const Componet3 = () => {
  const data = useContext(UserContext);
  const {id, name} = data;

  return (
    <>
      <p>ID From Component 3: {id}</p>
      <p>Name From Component 3: {name}</p>
      <Component4 />
    </>
  )
}

export default Componet3
