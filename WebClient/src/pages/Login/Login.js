import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../../assets/twitter.svg';

export default class Login extends Component {
    state = {
        username: ''
    };

    handleInputUsernameChange = (e) =>
        this.setState({ username: e.target.value });

    handleButtonLogin = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        let { username } = this.state;
        if (!username.length) return;
        localStorage.setItem('@username', username);
        this.props.history.push("/timeline");
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="Twitter" />
                <form onSubmit={this.handleButtonLogin}>
                    <input placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputUsernameChange} />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
