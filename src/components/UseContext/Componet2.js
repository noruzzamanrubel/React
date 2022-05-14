import React, { useContext } from 'react';
import Componet3 from './Componet3';
import { UserContext } from './UserContext';

const Componet2 = () => {
    const data = useContext(UserContext);
    const { id, name } = data;
    return (
        <>
            <p>ID From Component 2: {id}</p>
            <p>Name From Component 2: {name}</p>
            <Componet3 />
        </>
    )
}

export default Componet2