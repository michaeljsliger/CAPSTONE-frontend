import React from 'react';
import { Link } from 'react-router-dom';
import authTokenService from '../../services/login-token-service';

class LoginLogout extends React.Component {


    renderLogout() {
        return (
            <Link to="/">
            <button onClick={() => {
                authTokenService.deleteAuthToken();
                window.location.href = "/";
                }}>Logout</button>
            </Link>
        )
    }

    renderLogin() {
        return (
            <div>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <br />
            <Link to="/register">
                <button>Register</button>
            </Link>
            </div>
        )
    }
    render() {
        
        
        return (
            <div>
                {
                authTokenService.hasAuthToken()
                      ? this.renderLogout()
                      : this.renderLogin()
                }
            </div>
        )
    }
}

export default LoginLogout;