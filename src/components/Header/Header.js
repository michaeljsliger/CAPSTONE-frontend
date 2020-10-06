import React from 'react';
import { Link } from 'react-router-dom';
import LoginLogout from '../loginForm/LoginLogout';
import './header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="header-container">
                <div className="header-text">COMMUNITY DRIVEN STORE</div>
                <div className="header-links">
                <Link to='/' className="link-container">Home</Link>
                <Link to='/about' className="link-container">About</Link>
                <Link to='/store' className="link-container">Store</Link>
                <Link to='/contact' className="link-container">Contact</Link>
                </div>
                <div>
                    <LoginLogout />
                </div>
            </div>
        )
    }
}

export default Header;