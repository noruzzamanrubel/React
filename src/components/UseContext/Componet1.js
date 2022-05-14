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
            <div className='text-center'>
                <h1 className='heading'>UserContext</h1>
                <Componet2 />
            </div>
        </UserContext.Provider>
    )
}

export default Componet1