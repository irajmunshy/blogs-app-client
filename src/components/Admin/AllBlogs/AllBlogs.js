import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AllBlogs.css';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://shielded-harbor-26724.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleDelete = (id) => {
        history.push('/');
        fetch(`https://shielded-harbor-26724.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                console.log('product deleted!');
            }
        });
    }

    return (
        <div className="all-blog px-5">
            <div className="p-4 info">
                <div className="d-flex tHead mb-3 align-items-center justify-content-between">
                    <h6>No</h6>
                    <h6>Title</h6>
                    <h6>Action</h6>
                </div>
                {
                    blogs.map((blog, index) => 
                        <div className="d-flex px-4 mb-2 tBody align-items-center justify-content-between">
                            <p>{index + 1}</p>
                            <p className="title">{blog.title}</p>
                            <p className="delete" onClick={() => handleDelete(blog._id)}><FontAwesomeIcon icon={faTrashAlt} /></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllBlogs;