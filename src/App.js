import React, { Component } from 'react';
import {connect} from 'react-redux';
import SentimentScore from './components/sentimentScore';
import StockSearch from './components/stockSearch';
import './App.css';

class App extends Component {

  renderResults () {
    const tweets = this.props.tweets.map((tweet, index) => {
      return <li key={index}>{tweet}</li>
    });
    return tweets;
  }

  render() {

    return (
      <div className="App">
        <StockSearch />
        <SentimentScore />
        {/* <p>{this.props.sentimentScore}</p> */}
        {/* <ul className="positive-words">Positive: {this.props.positiveWords}</ul>
        <ul className="negative-words">Negative: {this.props.negativeWords}</ul> */}
        <ul className="stock-search-results">
          Tweets:
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stock: state.stock,
  tweets: state.tweets,
  positiveWords: Object.keys(state.positiveWords),
  negativeWords: Object.keys(state.negativeWords)
});

export default connect(mapStateToProps)(App);