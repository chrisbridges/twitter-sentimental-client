import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BounceLoader} from 'react-spinners';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
    if (this.props.loading === null) {
      return null;
    }
    if (this.props.loading === true) {
      return this.renderLoader();
    }
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

  renderLoader () {
    return (
      <BounceLoader color={'#4A90E2'} loading={this.props.loading} />
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pulse</h1>
          <h2>Performing Real-time Sentimental Analysis on Stocks</h2>
          <TypedStocks />
        </header>
        <StockSearch />
        <Accordion />
        {/* <FAQs /> */}
        <main>
          {/* <Route exact path="/analysis" component={() =>  */}
          {/* {this.renderAnalysis()} */}
          {this.renderAnalysis()}
          {/* }/> */}
          {/* <Chart /> */}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(App);