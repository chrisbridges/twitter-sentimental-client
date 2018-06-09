import React, { Component } from 'react';
import {connect} from 'react-redux';
import {subscribeToStock} from '../actions/stockSearchActions';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import './stockSearch.css';

export class stockSearch extends Component {
// TODO: if another stock is searched for after initial search, disconnect previous socket
  // also do whenever anyone routes back to index route '/'
  search(e) {
    e.preventDefault();
    const symbol = `$${this.input.value.toUpperCase()}`;
    if (symbol.trim() === '$') {
      alert('Please enter a valid ticker - (eg. AAPL, MSFT, TSLA)');
      return;
    }
    this.props.dispatch(subscribeToStock(symbol));
    this.props.history.push('/analysis');
  }
// should I use Redux Forms?
  render() {
    return (
      <div className="stock-search">
        <form onSubmit={(e) => this.search(e)}>
          <input type="search" ref={input => this.input = input} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(stockSearch));