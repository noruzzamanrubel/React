import React, { useState } from 'react'
import Componet2 from './Componet2'
import { UserContext } from './UserContext'

const dumyData = {
    id: 101,
    name: 'Rubel Ahmed'
}
const dumyData2 = 'Hello World'

const Componet1 = () => {
    const [user, setUser] = useState(dumyData);
    const [text, setText] = useState(dumyData2);
    return (
        <UserContext.Provider value={{ user, text }}>
            <h1>{`Hello ${user.name}`}</h1>
            <Componet2 />
        </UserContext.Provider>
    )
}

export default Componet1