import React, { Component } from 'react';
import LikeImg from '../assets/like.svg'
import './Tweet.css';
import api from '../services/api';
export default class Tweet extends Component {
  handleLike= ()=>{
    
  };
  render() {
    let {tweet}= this.props;    

    return(
        <li className='tweet'>
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button onClick={this.handleLike} >
              <img src={LikeImg}/>
              <p>{tweet.likes}</p>
            </button>
        </li>
    );
  }
}
