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
      tweets: null
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
    // const socket = openSocket(API_BASE_URL);
    socket.emit('request-symbol', symbol);
    socket.on(`symbol-${symbol}`, data => {
      this.setState({tweets: data});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="stock-search">
          <form onSubmit={(e) => this.search(e)}>
            <input type="search" ref={input => this.input = input} />
            <button type="submit">Search</button>
          </form>
          <ul className="stock-search-results">
            {this.state.tweets}
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