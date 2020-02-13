import React, { Component } from 'react';
import './Tweet.css';
import LikeIcon from '../../assets/like.svg';
import api from '../../services/twitter-service';

export default class Tweet extends Component {

    handleLike = async () => {
        const { _id } = this.props.tweet;

        await api.post(`api/tweet/like/${_id}`);
    }

    render() {

        const { tweet } = this.props;



        return (
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button onClick={this.handleLike} >
                    <img src={LikeIcon} alt="like" />
                    {tweet.likes}
                </button>
            </li>

        );
    }
}
