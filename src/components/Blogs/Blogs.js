import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blogs = ({blog, handleBlog}) => {
    const {_id, imageUrl, title, description} = blog;

    return (
        <div className="col-md-4">
            <div className="mb-4 blog-info">
                <img className="img-fluid" src={imageUrl} alt="" />
                <div className="details pb-3">
                    <h4 className="my-3">{title}</h4>
                    <p>{description.slice(0, 111)}...</p>
                    <button className="btn readMore" onClick={() => handleBlog(_id)}>Read More <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;