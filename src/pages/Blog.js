import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { data } from './data';

const Blog = () => {
    const [blog, setBlog] = useState(data);
    const navigate = useNavigate()

    const TruncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        }
        return str;
    }


    return (
        <div className='main'>
            <h1 className='text-center'>Blog Page</h1>
            <section>
                {blog.map((item) => {
                    const { id, title, desc } = item;
                    return (
                        <article key={id}>
                            <h2>{title}</h2>
                            <p>{TruncateString(desc, 200)}</p>
                            <Link to={title}>Learn More</Link>
                        </article>
                    )
                })}
            </section>
            <button className='btn' onClick={() => {
                navigate('/')
            }}>
                Go To Home
            </button>
        </div>
    )
}

export default Blog