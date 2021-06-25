import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './BlogPost.css';

const axios = require('axios');

const BlogPost = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    const [success, setSuccess] = useState('');

    const onSubmit = data => {
        const {title, description} = data;
        const evenData = {
            title: title,
            imageUrl: imgUrl,
            description: description
        }
        
        fetch('https://shielded-harbor-26724.herokuapp.com/addBlog', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(evenData)
        })
        .then(res => setSuccess('Post Saved Successfully!'))

        document.getElementById('title').value = '';
        document.getElementById('image').value = '';
        // document.getElementById('description').value = '';
    }

    const handleImageUpload = (event) => {
        const imgData = new FormData();
        imgData.set('key', '3c15a825f4e4ac0d0971a4c8ee8ae8b2');
        imgData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', 
            imgData)
          .then(function (response) {
            setImgUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="post-area px-5 pt-3">
            <div className="container py-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex mb-4">
                        <div className="w-100 me-1">
                            <label htmlFor="">Blog Title</label>
                            <input type="text" id="title" className="mt-2 form-control" {...register("title")} placeholder="Enter Title" required />
                        </div>

                        <div className="w-100 ms-1">
                            <label htmlFor="">Add Photo</label>
                            <input type="file" id="image" className="mt-2 form-control" onChange={handleImageUpload} required />
                        </div>  
                    </div>  

                    <div>
                        <label htmlFor="">Blog Content</label>
                        <textarea {...register("description")} id="description" className="mt-2 form-control" id="" cols="30" rows="9" required placeholder="Enter Content"></textarea>
                    </div>  
                    
                    <input type="submit" value="SAVE" className="btn mt-3 saveBtn" />
                    {success &&
                        <p style={{fontWeight: '500'}} className="pt-4 text-center text-success">{success}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default BlogPost;