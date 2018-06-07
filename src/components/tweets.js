import React, { Component } from 'react';
import {connect} from 'react-redux';
import './tweets.css';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

export class Tweets extends Component {

  renderSpinner (loading) {
    if (loading) {
      return <RingLoader
        color={'#123abc'} 
        loading={loading}
      />
    }
    return this.renderTweets();
  }

  renderTweets () {
    return this.props.tweets.map((tweet, index) => {
      return (
      <li key={index}>
        <div className="tweet">
          <div className="tweet-text-container">
            <img className="tweet-user-image" src={tweet.userImage} alt="user profile" />
            <p className="tweet-text">{tweet.text}</p>
            <p className="tweet-username">- @{tweet.username}</p>
          </div>
        </div>
      </li>
      );
    });
  }

  render() {
    return (
      <div className="tweets">
        {this.renderTweets()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets,
  loading: Boolean(state.tweets.length)
});

Tweets.propTypes = {
  loading: PropTypes.bool.isRequired,
  tweets: PropTypes.array
};

export default connect(mapStateToProps)(Tweets);