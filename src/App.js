import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TypedStocks from './components/TypedStocks';
import StockSearch from './components/stockSearch';
import FAQs from './components/faqs';
import SentimentScore from './components/sentimentScore';
import SentimentWords from './components/sentimentWords';
import Tweets from './components/tweets';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1><Link to="/">Pulse</Link></h1>
            <h2>Performing Real-time Sentimental Analysis on Stocks</h2>
            <TypedStocks />
          </header>
          <StockSearch />
          <FAQs />
          <main>
            <Route exact path="/analysis" component={() => 
              <div className="analysis">
                {/* <h1>What are people saying?</h1> */}
                <Tweets />
                <SentimentWords />
                <SentimentScore />
              </div>} 
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;