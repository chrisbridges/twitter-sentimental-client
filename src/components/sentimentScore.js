import React, { Component } from 'react';
import {connect} from 'react-redux';
import './SentimentScore.css';

export class SentimentScore extends Component {

  renderEmojis (score) {
    if (score < -150) {
      return '💔💔💔';
    }
    if (score < -100) {
      return '💔💔';
    }
    if (score < -50) {
      return '💔';
    }
    if (score < -20) {
      return "🙁";
    }
    if (score < -10) {
      return "😔";
    }
    if (score < 0) {
      return "😕";
    }


    if (score > 150) {
      return '💖💖💖';
    }
    if (score > 100) {
      return '💖💖';
    }
    if (score > 50) {
      return '💖';
    }
    if (score > 20) {
      return '😀';
    }
    if (score > 10) {
      return '😊';
    }
    if (score > 0) {
      return '🙂';
    }
    return "🤔";
  }

  render() {
    const score = this.props.sentimentScore;
    return (
      <div aria-live="polite" className="sentiment-score col">
        <h1>Sentiment Score:</h1>
        <p className="score">{score}</p>
        <p className="emoji">{this.renderEmojis(score)}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sentimentScore: state.sentimentScore
});

export default connect(mapStateToProps)(SentimentScore);