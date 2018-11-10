import React, { Component } from 'react';
import './TimeLine.css';
import TwitterLogo from '../../assets/twitter.svg'
import api from "../../services/api";
import Tweet from '../../components/Tweet';

export default class TimeLine extends Component {

  state = {
    tweets: [],
    newTweet: ''
  }

  async componentDidMount() {
    let response = await api.get("api/tweets");
    this.setState({ tweets: response.data });
  }

  handleInputNewTweetChange = (e) =>
    this.setState({ newTweet: e.target.value });

  handleNewTweet = async (e) => {
    if (e.keyCode !== 13) return;
    let { newTweet } = this.state;
    let author = localStorage.getItem("@username");
    await api.post("api/tweets", { author, content: newTweet });
    this.setState({ newTweet: '' });
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={TwitterLogo} alt="Twitter" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputNewTweetChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?" />
        </form>
        <ul>
          {this.state.tweets.map(tweet =>
            <Tweet key={tweet._id} tweet={tweet}></Tweet>
          )}
        </ul>

      </div>
    );
  }
}
