import React, { Component } from 'react';
import {connect} from 'react-redux';

export class tweets extends Component {

  renderTweets () {
    return this.props.tweets.map((tweet, index) => {
      console.log(tweet);
      return <li key={index}><img src={tweet.userImage} alt="user profile" /><p>@{tweet.username}</p><p>{tweet.text}</p></li>
    });
  }

  render() {
    return (
      <div className="tweets">
      <h1>Tweets:</h1>
        {this.renderTweets()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets
});

export default connect(mapStateToProps)(tweets);
