import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { faPlus, faSignOutAlt, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth"

const Sidebar = ({handleSidebar}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    
    const handleLogOut = () => {
        firebase.auth().signOut()
        .then((res) => {  
            const signOutUser = {
                userName: '',
                email: '',
                error: '',
                photo: '',
                password: '',
                confirmPassword: '',
                isLoggedIn: false
            } 
            setLoggedInUser(signOutUser);
            history.push('/');
        })
        .catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="sidebar">
            <h3 className="logo">
                <Link to="/">Blogs</Link>
            </h3>

            <div className="d-flex flex-column sidebar-detail mx-3 justify-content-between">
                <div>
                    <ul className="list-unstyled pt-3">
                        <li onClick={() => handleSidebar('Blogs')}>
                            <FontAwesomeIcon icon={faThLarge} /> <span>Blog List</span>
                        </li>
                        <li onClick={() => handleSidebar('addBlog')}>
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
                        </li>
                    </ul>
                </div>

                <div className="logout" onClick={handleLogOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>LogOut</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;