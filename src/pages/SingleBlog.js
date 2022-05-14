import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './data';

const SingleBlog = () => {
    const { title } = useParams();
    const [blog, setBlog] = useState("");
    useEffect(() => {
        const blog = data.filter(item => item.title === title);
        setBlog(blog[0].desc);
    }, [title]);

    return (
        <div>
            <h1>{title}</h1>
            <p>{blog}</p>
        </div>
    )
}

export default SingleBlog