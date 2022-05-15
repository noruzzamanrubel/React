import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { data } from './data';

const SingleBlog = () => {
    const { title } = useParams();
    const [blog, setBlog] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const blog = data.filter(item => item.title === title);
        setBlog(blog[0].desc);
    }, [title]);

    return (
        <div className='text-center'>
            <h1>{title}</h1>
            <p>{blog}</p>
            <button className='btn' onClick={() => {
                navigate('/blog')
            }}>
                Go To Blog
            </button>
        </div>
    )
}

export default SingleBlog