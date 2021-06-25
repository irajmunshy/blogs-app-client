import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './BlogDetails.css';

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    const {imageUrl, title, description} = blog;

    useEffect(() => {
        fetch(`https://shielded-harbor-26724.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="pt-5 mt-5 blog-detail-area">
                    <img className="img-fluid" src={imageUrl} alt="" />
                    <h2>{title}</h2>
                    <p>
                        {description}
                        {/* {description.slice(0, 750)}<br /><br />
                        {description.slice(751, 1850)}<br /><br />
                        {description.slice(1851, 3850)}<br /><br />
                        {description.slice(3851, 6850)}<br /><br />
                        {description.slice(6850, 7850)}<br /><br />
                        {description.slice(1851, description.length)}<br /><br /> */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;