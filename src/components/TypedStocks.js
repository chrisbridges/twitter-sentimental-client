import React, { Component } from 'react';
import Typed from 'typed.js';
import './TypedStocks.css';

export class TypedStocks extends Component {

  componentDidMount () {
    const stocks = ['AAPL ^500 (Apple)', 'MSFT ^500 (Microsoft)', 'TSLA ^500 (Tesla)', 'SNAP ^500 (Snapchat)', 'SPOT ^500 (Spotify)', 'Anything you\'d like :)'];
    const options = {
      stringsElement: '.typed',
      strings: stocks,
      typeSpeed: 100,
      loop: true
    };
    const typed = new Typed('#typed', options);
    return typed;
  }

  render() {
    return (
      <div className="typed-stocks">
        <h1>Find out what people are saying about:</h1>
        <span id="typed"></span>
      </div>
    );
  }
}

export default TypedStocks;
