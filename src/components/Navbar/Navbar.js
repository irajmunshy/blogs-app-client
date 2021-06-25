import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {photo, email} = loggedInUser;

    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
            <div className="container">
                <div className="w-100 d-flex justify-content-between custom-navbar">
                    <div className="logo">
                        <Link className="navbar-brand" to="/home">Blogs</Link>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/home" className="nav-link">Home</Link>
                                <Link to="/admin" className="nav-link">Admin</Link>
                                {
                                    !loggedInUser.isLoggedIn ? 
                                    <Link to="/login" className="nav-link">Login</Link>
                                    :
                                    <Link to="/user" class="nav-link">{photo ? <img style={{width: '30px', height: '30px', borderRadius: '100px'}} src={photo}  alt=""/> : <p style={{textTransform: 'capitalize'}} id="custom-link">{email.slice(0, -9)}</p>}</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;