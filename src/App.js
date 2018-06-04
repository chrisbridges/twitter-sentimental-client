import React, { Component } from 'react';
import {connect} from 'react-redux';
import StockSearch from './components/stockSearch';
import SentimentScore from './components/sentimentScore';
import SentimentWords from './components/sentimentWords';
import Tweets from './components/tweets';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <StockSearch />
        <SentimentScore />
        <SentimentWords />
        <Tweets />
      </div>
    );
  }
}

export default App;