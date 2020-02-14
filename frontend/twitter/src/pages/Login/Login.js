import React, { Component } from 'react';
import twitterLogo from '../../assets/twitter.svg';
import './Login.css';

export default class Login extends Component {

    state = {
        username: '',
    };

    handleUsernameInputChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const { username } = this.state;

        if (!username || !username.length) return;

        localStorage.setItem('@twitter:username', username);

        this.props.history.push('/timeline');
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="Twitter" />
                <form onSubmit={this.handleOnSubmit} >
                    <input
                        placeholder="Nome de usuário"
                        value={this.state.username}
                        onChange={this.handleUsernameInputChange}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        )
    }
}
