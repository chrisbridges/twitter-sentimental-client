import React, { Component } from 'react';
import {connect} from 'react-redux';
import {subscribeToStock, returnToDefaultState} from '../actions/stockSearchActions';
import './StockSearch.css';

export class StockSearch extends Component {
  search(e) {
    e.preventDefault();
    // search for tweets with preceding '$' - the de-facto 'hashtag' for stocks
    const symbol = `$${this.input.value.toUpperCase()}`;
    if (symbol.trim() === '$') {
      alert('Please enter a valid ticker - (e.g. AAPL, MSFT, TSLA)');
      return;
    }
    // clear state upon searching for new stock
    this.props.dispatch(returnToDefaultState());
    this.props.dispatch(subscribeToStock(symbol));
  }

  render() {
    return (
      <div className="stock-search">
        <form role="search" onSubmit={(e) => this.search(e)}>
          <input type="text" ref={input => this.input = input} placeholder="Insert stock ticker"/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default connect()(StockSearch);