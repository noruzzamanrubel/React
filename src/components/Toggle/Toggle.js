import React, { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <div>
            {toggle && (
                <p style={{ margin: "1rem", padding: "1rem", backgroundColor: "pink" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum!</p>
            )}
            <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? "Hide" : "Show"}
                </button>
            </div>
        </div>

    )
}

export default Toggle