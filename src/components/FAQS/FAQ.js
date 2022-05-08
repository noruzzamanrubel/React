import React, { useState } from 'react'

const FAQ = (props) => {
    const [toggle, setToggle] = useState(false)
    const { title, desc } = props.faq

    return (
        <article className='faq'>
            <div>
                <h4>{title}</h4>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? '-' : '+'}
                </button>
            </div>
            {toggle && <p>{desc}</p>}

        </article>
    )
}

export default FAQ