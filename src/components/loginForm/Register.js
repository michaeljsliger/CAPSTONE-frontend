import React from 'react';

class Register extends React.Component {

    render() {
        return (
            <div>
                <h2>Register User (not func)</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="input-container">
                        <label htmlFor="userNickname">Name:</label>
                        <input type="text" 
                        name="userNickname" id="userNickName"
                        placeholder="name"
                        />
                        <label htmlFor="email">email:</label>
                        <input type="text" 
                        name="email" id="email"
                        placeholder="----@gmail.com"
                        />
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
            </div>
        )
    }
}

export default Register;