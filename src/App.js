import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {searchStocks} from './actions/actions';
import './App.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

class App extends Component {

  constructor(props) {
    super(props);
    
    socket.on('tweets', data => {
      if (data) {
        this.setState({tweets: data.tweetText, sentimentScore: data.sentimentScore});
      }
    });
    socket.emit('subscribeToTweets', 'AAPL');
  }

  state = {
    tweets: null,
    sentimentScore: null
  };

  componentDidMount() {
    // const socket = io();
    // socket.on('connection', () => {
    //   console.log('Socket Connected');
    //   socket.on('tweets', data => {
    //     console.log(data);
    //   });
    //   socket.on('disconnect', () => {
    //     socket.removeAllListeners("tweets");
    //     console.log("Socket Disconnected");
    //   });
    // });
    // socket.on('tweets', tweets => console.log(tweets));
    // socket.emit('subscribeToTweets', 'AAPL');
  }

  renderResults () {
    const stockData = this.state.tweets;
    return stockData;
  }

  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }

    // this.props.dispatch(searchStocks(this.input.value));
  }

  render() {
    return (
      <div className="App">
        <div className="stock-search">
          <form onSubmit={(e) => this.search(e)}>
            <input type="search" ref={input => this.input = input} />
            <button>Search</button>
          </form>
          <ul className="stock-search-results">
            {this.state.tweetText}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(App);
