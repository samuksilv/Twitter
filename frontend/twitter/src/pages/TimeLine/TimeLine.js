import React, { Component } from 'react';
import socket from 'socket.io-client';
import TwitterLogo from '../../assets/twitter.svg';
import api from '../../services/twitter-service';
import Tweet from '../../components/Tweet/Tweet';
import './Timeline.css';

export default class TimeLine extends Component {

    state = {
        tweets: [],
        newTweet: ''
    };

    loadTweets = async () => {
        const response = await api.get('api/tweet');

        this.setState({ tweets: response.data });
    }

    async componentDidMount() {
        this.subscribeEvents();
        await this.loadTweets();
    }

    subscribeEvents(){
        const io = socket('http://localhost:3001');

        io.on('tweet', data=>{
            this.loadTweets();
        });
        
        io.on('like', data=>{
            this.loadTweets();
        });
        
        io.on('unlike', data=>{
            this.loadTweets();
        });
    }

    handleNewTweetTextareaChange = (event) => {
        this.setState({ newTweet: event.target.value });
    }

    handleCreateNewTweet = async (event) => {
        if (event.keyCode !== 13)
            return;

        const { newTweet: content } = this.state;
        const author = localStorage.getItem('@twitter:username');

        console.log({ content, author });

        await api.post('api/tweet', { content, author });

        this.setState({ newTweet: '' });
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
                <ul className="tweet-list">
                    {this.state.tweets.map(tweet => {
                        return (
                            <Tweet key={tweet._id} tweet={tweet} >{tweet.content}</Tweet>
                        );
                    })}
                </ul>

            </div>
        )
    }
}
