import React from 'react';
import authService from '../../services/login-token-service';
import API_SERVICES from '../../services/api-services';

class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
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
        console.log(response);

        if (typeof response === 'object') {
            console.log(response);
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
            <div>
                <div>
                    {this.state.error && <p className="error-text">{this.state.error}</p>}
                </div>
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