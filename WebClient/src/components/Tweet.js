import React, { Component } from 'react';

// import { Container } from './styles';

export default class Tweet extends Component {
  render() {
    let {tweet}= this.props;

    return(
        <li className='tweet'>
            <strong>{tweet.author}</strong>
        </li>
    );
  }
}
