import React, { Component } from 'react';
import LikeIcon from '../../assets/like.svg';
import TwitterLogo from '../../assets/twitter.svg';
import './Timeline.css';


export default class TimeLine extends Component {

    state = {
        newTweet: ''
    };

    handleNewTweetTextareaChange = (event) => {
        this.setState({ newTweet: event.target.value });
    }

    handleCreateNewTweet = (event) => {
        if (event.keyCode !== 13)
            return;

        const { newTweet: content } = this.state;
        const author = localStorage.getItem('@twitter:username');

        console.log({ content, author })

    }

    render() {
        return (
            <div className="timeline-wrapper">
                <img height={24} src={TwitterLogo} alt="twitter" />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleNewTweetTextareaChange}
                        onKeyDown={this.handleCreateNewTweet}
                        placeholder="O que está acontecendo?"
                    />
                </form>
            </div>
        )
    }
}
