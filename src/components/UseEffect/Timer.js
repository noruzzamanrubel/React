import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setCount(count => count + 1);
            setTime(time => time + 2);
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [count, time]);
    return (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
            <h1>UseEffect</h1>
            <h1>I've rendered {count} times!</h1>
            <h1>I've rendered {time} times!</h1>
        </div>
    )
}

export default Timer