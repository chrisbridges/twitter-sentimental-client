import React, { Component } from 'react';
// import {connect} from 'react-redux';
import StockSearch from './components/stockSearch';
import SentimentScore from './components/sentimentScore';
import SentimentWords from './components/sentimentWords';
import Tweets from './components/tweets';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pulse</h1>
          <h2>Performing Real-time Sentimental Analysis on Stocks</h2>
        </header>
        <StockSearch />
        <SentimentScore />
        <SentimentWords />
        <Tweets />
      </div>
    );
  }
}

export default App;