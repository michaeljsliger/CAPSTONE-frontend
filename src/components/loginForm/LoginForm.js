import React from 'react';
import authService from '../../services/login-token-service';
import API_SERVICES from '../../services/api-services';
import './loginForm.css';

class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
        // setState data breach?
        error: null
    }

    handleUsernameChange = (val) => {
        this.setState({ username: val })
    }
    handlePasswordChange = (val) => {
        this.setState({ password: val })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const bodyObj = {
            username,
            password
        }

        const response = await API_SERVICES.attemptLogin(bodyObj)

        if (typeof response === 'object') {
            if (response.status == 401) {
                this.setState({
                    username: '',
                    password: '',
                    error: response.message
                })
            }
            return undefined;
        }

        this.setState({
            username: '',
            password: '',
            error: null,
        })

        authService.storeAuthToken(response);
        window.location.href = '/store';
        
        // res 200 ok, store authService.storeAuthToken(res.body?)
        // !res.ok display error and setstate error
        // on success, redirect to store!

        
        // window.location.href = "/store";
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-error">
                    {this.state.error && <p className="error-text">{this.state.error}; refresh may be necessary</p>}
                </div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="input-container">
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                        name="username" id="username"
                        placeholder="username"
                        onChange={e => this.handleUsernameChange(e.target.value)} />
                        </div>
                        <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                        name="password" id="password"
                        placeholder="password"
                        onChange={e => this.handlePasswordChange(e.target.value)} />
                        </div>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    Users Available for Testing: 
                    <ul className="user-list">
                        <li>username: michael || password: password</li>
                        <li>test-user   || { `{ password }` }</li>
                        <li>test-user-2 || { `{ password }` }</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LoginForm;