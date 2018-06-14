import React, { Component } from 'react';
import {connect} from 'react-redux';
// import './sentimentScore.css';

export class SentimentScore extends Component {
  render() {
    return (
      <div className="sentiment-score col">
        <h1>Sentiment Score:</h1>
        {this.props.sentimentScore}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sentimentScore: state.sentimentScore
});

export default connect(mapStateToProps)(SentimentScore);