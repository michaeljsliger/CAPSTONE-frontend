import React from 'react';
import authService from '../../services/login-token-service';

class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleUsernameChange = (val) => {
        this.setState({ username: val })
    }
    handlePasswordChange = (val) => {
        this.setState({ password: val })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const authtoken = authService.makeBasicAuthToken(username, password);
        authService.storeAuthToken(authtoken);
        // fetch call to server_url/login
        // compare state values to database values

        this.setState({
            username: '',
            password: ''
        })
        window.location.href = "/store";
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text"
                        name="username" id="username"
                        placeholder="username"
                        onChange={e => this.handleUsernameChange(e.target.value)} />
                    <input type="text"
                        name="password" id="password"
                        placeholder="password"
                        onChange={e => this.handlePasswordChange(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;