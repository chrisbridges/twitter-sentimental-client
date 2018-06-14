import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TypedStocks from './components/TypedStocks';
import StockSearch from './components/stockSearch';
import FAQs from './components/faqs';
import Accordion from './components/Accordion';
import Tweets from './components/tweets';
import SentimentScore from './components/sentimentScore';
import SentimentWords from './components/sentimentWords';
import Chart from './components/Chart';
import './App.css';

class App extends Component {

  renderAnalysis () {
    if (this.props.receivedTweets) {
      return (
        <div className="dashboard">
          <div className="analysis">
            {/* <h1>What are people saying?</h1> */}
            <Tweets />
            <SentimentWords />
            <SentimentScore />
          </div>
          <Chart />
        </div>
      );
    }
    return null;
  }

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
          <Accordion />
          {/* <FAQs /> */}
          <main>
            {/* <Route exact path="/analysis" component={() =>  */}
            {this.renderAnalysis()}
            {/* }/> */}
            {/* <Chart /> */}
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  receivedTweets: state.tweets.length > 0
});

export default connect(mapStateToProps)(App);