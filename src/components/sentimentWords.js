import React, { Component } from 'react';
import {connect} from 'react-redux';

export class sentimentWords extends Component {

  findMostFrequentWords (wordsObj) {
    let words = Object.keys(wordsObj);
    const mostFrequentWords = words.sort((word1, word2) => {
      return wordsObj[word2] - wordsObj[word1];
    });
    // return the 5 most frequently tweeted words
    return mostFrequentWords.splice(0,5);
  }

  renderWords (words) {
    return words.map((word, index) => {
      return <li key={index}>{word}</li>
    });
  }

  render() {
    return (
      <div className="sentiment-words">
        <h1>What are people saying?</h1>
        <h2>Positive:</h2>
        <ul className="positive-words">
          {this.renderWords(this.findMostFrequentWords(this.props.positiveWords))}
        </ul>
        <h2>Negative:</h2>
        <ul className="negative-words">
          {this.renderWords(this.findMostFrequentWords(this.props.negativeWords))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  positiveWords: state.positiveWords,
  negativeWords: state.negativeWords
});

export default connect(mapStateToProps)(sentimentWords);
