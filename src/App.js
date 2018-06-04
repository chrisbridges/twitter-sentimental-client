import React, { Component } from 'react';
import {connect} from 'react-redux';
import SentimentScore from './components/sentimentScore';
import {subscribeToStock} from './actions/actions';
import './App.css';

class App extends Component {

  search(e) {
    e.preventDefault();
    const symbol = this.input.value;
    console.log(symbol);
    if (symbol.trim() === '') {
      alert('Please enter a valid ticker - (eg. AAPL, MSFT, TSLA)');
      return;
    }
    this.props.dispatch(subscribeToStock(symbol));
  }

  renderResults () {
    const tweets = this.props.tweets.map((tweet, index) => {
      return <li key={index}>{tweet}</li>
    });
    return tweets;
  }

  render() {

    return (
      <div className="App">
        <div className="stock-search">
          <form onSubmit={(e) => this.search(e)}>
            <input type="search" ref={input => this.input = input} />
            <button type="submit">Search</button>
          </form>
          <SentimentScore />
          {/* <p>{this.props.sentimentScore}</p> */}
          {/* <ul className="positive-words">Positive: {this.props.positiveWords}</ul>
          <ul className="negative-words">Negative: {this.props.negativeWords}</ul> */}
          <ul className="stock-search-results">
            Tweets:
            {this.renderResults()}
          </ul>
        </div>
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