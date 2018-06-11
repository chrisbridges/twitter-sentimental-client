import React, { Component } from 'react';
import {connect} from 'react-redux';
import './sentimentWords.css';

export class sentimentWords extends Component {

  findMostFrequentWords (wordsObj) {
    let words = Object.keys(wordsObj);
    const mostFrequentWords = words.sort((word1, word2) => {
      return wordsObj[word2] - wordsObj[word1];
    });
    // return the 5 most frequently tweeted words
    return mostFrequentWords.splice(0,5);
  }
// add 'loading' prop logic to not display these messages if loading === true
  renderWords (words, positiveOrNegative) {
    if (this.props.tweets.length >= 1 && words.length === 0 && positiveOrNegative === 'positive') {
      return <p>Not a whole lot of love for {this.props.stock} right now</p>;
    }
    if (this.props.tweets.length >= 1 && words.length === 0 && positiveOrNegative === 'negative') {
      return <p>Nothing negative to report about {this.props.stock} for now</p>;
    }
    return words.map((word, index) => {
      return <li key={index}>{word}</li>
    });
  }

  render() {
    return (
      <div className="sentiment-words">
        <div className="positive-words">
          <h2>Positive:</h2>
          <ul>
            {this.renderWords(this.findMostFrequentWords(this.props.positiveWords), 'positive')}
          </ul>
        </div>
        <div className="negative-words">
          <h2>Negative:</h2>
          <ul>
            {this.renderWords(this.findMostFrequentWords(this.props.negativeWords), 'negative')}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stock: state.stock,
  tweets: state.tweets,
  positiveWords: state.positiveWords,
  negativeWords: state.negativeWords
});

export default connect(mapStateToProps)(sentimentWords);
