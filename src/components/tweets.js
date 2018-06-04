import React, { Component } from 'react';
import {connect} from 'react-redux';

export class tweets extends Component {

  renderTweets () {
    return this.props.tweets.map((tweet, index) => {
      return <li key={index}>{tweet}</li>
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
  tweets: state.tweets
});

export default connect(mapStateToProps)(tweets);
