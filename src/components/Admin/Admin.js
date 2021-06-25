import React, { useContext, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import BlogPost from './BlogPost/BlogPost';
import AllBlogs from './AllBlogs/AllBlogs';
import { UserContext } from '../../App';

const Admin = () => {
    const [toggle, setToggle] = useState('');
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSidebar = (path) => {
        setToggle(path);
    }

    return (
        <div style={{overflowX: 'hidden'}}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar handleSidebar={handleSidebar} />
                </div>

                <div className="col-md-9">
                    <div className="d-flex justify-content-between p-3 me-3">
                        <h5 className="">{toggle === 'addBlog' ? 'Add Blog' : 'Blog List'}</h5>
                        <h5>{loggedInUser.userName ? loggedInUser.userName : loggedInUser.email.slice(0, -9)}</h5>
                    </div>

                    {
                        toggle === 'addBlog' ? <BlogPost /> : <AllBlogs />
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;