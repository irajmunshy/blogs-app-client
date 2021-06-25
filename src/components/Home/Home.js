import React, { useState, useEffect } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://shielded-harbor-26724.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const history = useHistory();
    const handleBlog = (id) => {
        history.push(`/blog/${id}`);
    }

    return (
        <div style={{background: '#F2F2F2'}}>
            <Navbar />

            <div className="container mt-5 py-5">
                <div className="row mt-5">
                    {
                        blogs.map(blog => <Blogs 
                                key={blog._id}
                                blog={blog}
                                handleBlog={handleBlog}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;