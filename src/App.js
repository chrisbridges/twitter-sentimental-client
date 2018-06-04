import React, { Component } from 'react';
import {connect} from 'react-redux';
import {subscribeToStock} from './actions/actions';
import './App.css';
import {API_BASE_URL} from './config';
import openSocket from 'socket.io-client';
const socket = openSocket(API_BASE_URL);

class App extends Component {

  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     tweets: [],
  //     score: 0,
  //     positiveWords: [],
  //     negativeWords: []
  //   };
  // }

  search(e) {
    e.preventDefault();
    const symbol = this.input.value;
    console.log(symbol);
    // I think I want to keep this logic here - onSubmit
    if (symbol.trim() === '') {
      return;
    }
    this.props.dispatch(subscribeToStock(symbol));
    // this.props.dispatch(searchStocks(this.input.value));
    // socket.emit('request-symbol', symbol);
    // socket.on(`symbol-${symbol}`, data => {
    //   this.setState({stock: symbol, tweets: [data.tweet, ...this.state.tweets], score: this.state.score + data.score});
    //   if (data.positiveWords.length > 0) {
    //     this.setState({positiveWords: [...this.state.positiveWords, data.positiveWords]});
    //   }
    //   if (data.negativeWords.lenght > 0) {
    //     this.setState({negativeWords: [...this.state.negativeWords, data.negativeWords]});
    //   }
    // });
  }

  renderResults () {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <li key={index}>{tweet}</li>
    });
    return tweets;
  }

  renderWords () {
    const positiveWords = this.state.positiveWords.map((word, index) => {
      return <li key={index}>{word}</li>
    });
    const negativeWords = this.state.negativeWords.map((word, index) => {
      return <li key={index}>{word}</li>
    });
    return {positiveWords, negativeWords};
  }

  render() {
    const words = this.renderWords();

    return (
      <div className="App">
        <div className="stock-search">
          <form onSubmit={(e) => this.search(e)}>
            <input type="search" ref={input => this.input = input} />
            <button type="submit">Search</button>
          </form>
          <p>{this.state.score}</p>
          <ul className="positive-words">Positive: {words.positiveWords}</ul>
          <ul className="negative-words">Negative: {words.negativeWords}</ul>
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
  sentimentScore: state.sentimentScore
});

export default connect(mapStateToProps)(App);