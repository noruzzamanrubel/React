import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    const [user, setUser] = useSearchParams();
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name });
    }
    return (
        <div>
            <h1>User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default User