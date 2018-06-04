import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchStocks} from './actions/actions';
import './App.css';
import {API_BASE_URL} from './config';
import openSocket from 'socket.io-client';
const socket = openSocket(API_BASE_URL);

class App extends Component {

  // componentDidMount() {
  //   const socket = openSocket(API_BASE_URL);
  //   socket.on('tweets', data => {
  //     console.log(data);
  //   });
  //   socket.emit('subscribeToTweets', 'AAPL');
  // }

  constructor(props) {
    super(props);
    
    this.state = {
      tweets: [],
      score: 0
    };
  }

  search(e) {
    e.preventDefault();
    const symbol = this.input.value;
    console.log(symbol);
    if (symbol.trim() === '') {
      return;
    }
    // this.props.dispatch(searchStocks(this.input.value));
    socket.emit('request-symbol', symbol);
    socket.on(`symbol-${symbol}`, data => {
      this.setState({stock: symbol, tweets: [...this.state.tweets, data.tweet], score: this.state.score + data.analysis});
    });
  }

  renderResults () {
    const tweets = this.state.tweets.map((tweet, index) => {
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
          <p>{this.state.score}</p>
          <ul className="stock-search-results">
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